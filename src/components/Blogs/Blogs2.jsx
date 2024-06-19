import { ImageCollection } from "@/assets";
import { blogPosts, services, styles } from "@/src/data";
import {
  BackgroundImage,
  Image,
  Overlay,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useTrail, animated, useSpring } from "@react-spring/web";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import Btn from "../button";
import { api } from "@/src/api";
import axios from "axios";

const Blogs2 = () => {
  const [blogs, setBlogs] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(blogs.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  // Fetch blogs from API on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(api.fetchAllBlogs); // Adjust the URL according to your API endpoint
        // Assuming response.data.data is an array of blogs
        const fetchedBlogs = response.data.data;

        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const renderedBlogs = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <div className="max-w-[550px] w-full">
        <Image
          src={`data:.webp;base64,${blogs[index].image}`}
          alt="Blog Image"
          className={`w-full h-[50%] rounded-xl`}
        />
        <div>
          <Title className={`text-black mt-6 font-sans`} order={3}>
            {blogs[index].title}
          </Title>
          <Text className="mt-6" c={`dimmed`} size="sm">
            {blogs[index].short_description}
          </Text>
          <Btn
            text="Read More"
            style={`rounded-md font-semibold border-[1.5px] border-primary h-[50px] bg-primary justify-center text-18px] max-lg:text-[17px] px-6 text-white mt-8 hover:bg-transparent hover:text-primary`}
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
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" className={`mt-10`}>
        {renderedBlogs}
      </SimpleGrid>
    </div>
  );
};

export default Blogs2;
