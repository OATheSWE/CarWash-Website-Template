import { Image, SimpleGrid, Text, Title } from "@mantine/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Btn from "../button";
import { useInView } from "react-intersection-observer";
import { useTrail, animated, useSpring } from "@react-spring/web";
import { router } from "expo-router";
import { blogPosts, styles } from "@/src/data";
import { api } from "@/src/api";
import blog from "@/app/blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const headAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Trail animation for blog posts
  const trail = useTrail(blogs.length, { // Adjusted to pick two items
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300,
  });

  // Fetch blogs from API on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(api.fetchAllBlogs); // Adjust the URL according to your API endpoint
        // Assuming response.data.data is an array of blogs
        const fetchedBlogs = response.data.data;
        // Randomly pick two blogs
        const randomBlogs = pickRandomBlogs(fetchedBlogs, 2);
        setBlogs(randomBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to pick random blogs from array
  const pickRandomBlogs = (blogsArray, count) => {
    const shuffled = blogsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  

  // Render each blog post with animation
  const renderedBlogs = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <div className="max-w-[550px] w-full">
        <Image
          src={`data:.webp;base64,${blogs[index].image}`}  // Assuming your blog data structure has 'image' field
          alt="Blog Image"
          className="w-full h-[50%] rounded-xl"
        />
        <div>
          <Title className="text-black mt-6 font-sans" order={3}>
            {blogs[index].title}
          </Title>
          <Text className="mt-6" c="dimmed" size="sm">
            {blogs[index].short_description}
          </Text>
          <Btn
            text="Read More"
            style="rounded-md font-semibold border-[1.5px] border-primary h-[50px] bg-primary justify-center text-[18px] max-lg:text-[17px] px-6 text-white mt-8 hover:bg-transparent hover:text-primary"
            click={() => {
              router.push(`/blog?blog_id=${blogs[index].id}`);
            }}
          />
        </div>
      </div>
    </animated.div>
  ));

  return (
    <div ref={ref} className={`${styles.body} pt-[80px]`}>
      <animated.div
        style={headAnimation}
        className="flex justify-between items-center max-md:flex-col max-md:space-y-7 max-md:items-start"
      >
        <Title className="text-text font-sans" order={1}>
          Latest News & Articles
        </Title>
        <Btn
          text={
            <div className="flex justify-center items-center">
              <span className="w-[10px] h-[10px] rounded-full bg-white mr-2.5 transition-colors duration-300 group-hover:bg-primary"></span>
              View More
            </div>
          }
          style="rounded-md h-[45px] mt-3 border-2 border-primary bg-primary justify-center text-[16.5px] px-7 text-white hover:bg-white hover:text-black font-sans font-semibold"
          click={() => {
            router.push("/blogs");
          }}
        />
      </animated.div>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" className="mt-10">
        {renderedBlogs}
      </SimpleGrid>
    </div>
  );
};

export default Blogs;
