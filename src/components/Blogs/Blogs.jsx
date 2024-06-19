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
import React, { useState } from "react";
import Btn from "../button";

const Blogs = () => {
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

  const trail = useTrail(blogPosts.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const servs = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <div className="max-w-[550px] w-full">
        <Image
          src={blogPosts[index].img}
          alt="Logo"
          className={`w-full h-[50%] rounded-xl`}
        />
        <div>
          <Title className={`text-black mt-6 font-sans`} order={3}>
            {blogPosts[index].title}
          </Title>
          <Text className="mt-6" c={`dimmed`} size="sm">
          {blogPosts[index].text}
          </Text>
          <Btn
            text="Read More"
            style={`rounded-md font-semibold border-[1.5px] border-primary h-[50px] bg-primary justify-center text-18px] max-lg:text-[17px] px-6 text-white mt-8 hover:bg-transparent hover:text-primary`}
            
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
        <Title className={`text-text font-sans`} order={1}>
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
      <SimpleGrid
        cols={{ base: 1, sm: 2}}
        spacing="xl"
        className={`mt-10`}
      >
        {servs}
      </SimpleGrid>
    </div>
  );
};

export default Blogs;
