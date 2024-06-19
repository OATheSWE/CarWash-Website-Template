import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import { ImageCollection } from "../../../assets";
import { Card, Image, Text, Title } from "@mantine/core";
import { Header2 } from "@/src/components";
import { useLocalSearchParams } from "expo-router";
import { api } from "@/src/api";

const BlogPage = () => {
  const { blog_id } = useLocalSearchParams(); // Fetch blog_id from URL
  const [blog, setBlog] = useState(null); // State to hold the fetched blog data
  const [error, setError] = useState(null); // State to hold any error

  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 220, friction: 30 },
  });

  // Fetch blog data based on blog_id from URL parameter using axios POST
  useEffect(() => {
    const fetchBlog = async () => {
      const data = { id: blog_id };
      try {
        // Make API request to fetch blog data
        const response = await axios.post(api.fetchBlog, data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        // Set the fetched blog data to state
        setBlog(response.data.data); // Assuming response.data is the fetched blog object
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(error);
      }
    };

    if (blog_id) {
      fetchBlog();
    }
  }, [blog_id]); // Dependency array includes blog_id to refetch if it changes

  // Render the blog content
  const renderBlog = () => {
    if (error) {
      return <div>Error fetching blog: {error.message}</div>;
    }

    if (!blog) {
      return <div>Loading...</div>;
    }

    // Assuming the date is coming from the blog object
    const formattedDate = new Date(blog.date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return (
      <Card className="">
        <Text className="text-text text-sm">{formattedDate}</Text>
        <Image
          src={`data:.webp;base64,${blog.image}`}
          alt="Blog Image"
          className="my-4 rounded-lg"
        />
        <Text className="mb-5 mt-3 text-[18px]">{blog.short_description}</Text>
        <Title order={1} className="mb-4">
          {blog.title}
        </Title>
        <Text
          className="whitespace-pre-line text-[17px]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </Card>
    );
  };

  return (
    <animated.div style={slideInStyles} className="overflow-hidden pb-[100px]">
      <Header2
        img={ImageCollection.service9}
        topText={`Blog Post`}
        mainText={`Read Through`}
      />
      <div className={`${styles.body} py-[140px]`}>{renderBlog()}</div>
    </animated.div>
  );
};

export default BlogPage;
