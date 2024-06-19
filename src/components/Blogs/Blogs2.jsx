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

const Blogs2 = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
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

export default Blogs2;
