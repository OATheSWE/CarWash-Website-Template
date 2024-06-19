import { ImageCollection } from "@/assets";
import { services, styles } from "@/src/data";
import {
  BackgroundImage,
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

const Services = () => {
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

  const trail = useTrail(services.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const servs = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <BackgroundImage
        src={services[index].img}
        className="relative max-w-[750px] w-full h-[360px] cursor-pointer transition duration-300 hover:scale-90 rounded-lg"
        key={index}
      >
        <div className="absolute bottom-0 p-6 text-white max-w-[300px] w-full z-50">
          <Text className="capitalize text-[24px] font-semibold" truncate>
            {services[index].text}
          </Text>
        </div>
        <Overlay
          color="#000"
          backgroundOpacity={0.5}
          zIndex={10}
          radius={`lg`}
        />
      </BackgroundImage>
    </animated.div>
  ));
  return (
    <div ref={ref} className={`${styles.body} pt-[60px]`}>
      <animated.div style={headAnimation} className="flex justify-between items-center max-md:flex-col max-md:space-y-7 max-md:items-start">
        <Title className={`text-text`} order={1}>
          Our Services
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
            router.push("/services");
          }}
        />
      </animated.div>
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="lg"
        className={`mt-10`}
      >
        {servs}
      </SimpleGrid>
    </div>
  );
};

export default Services;
