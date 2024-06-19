import { ImageCollection } from "@/assets";
import { blogPosts, services, servicesPage, styles } from "@/src/data";
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

const ServicesList = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(servicesPage.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 500, // Adjust this delay based on your preference
  });

  const servicesP = trail.map((style, index) => (
    <animated.div ref={ref} key={index} style={style}>
      <div className="w-full">
        <div className="w-full h-[300px] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
          <Image
            src={servicesPage[index].img}
            alt="Car Image"
            className={`w-full h-full rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer`}
          />
        </div>

        <div>
          <Title className={`text-black mt-6 font-sans`} order={3}>
            {servicesPage[index].title}
          </Title>
          <Text className="mt-6 text-[18px]">{servicesPage[index].text}</Text>
        </div>
      </div>
    </animated.div>
  ));
  return (
    <div className={`${styles.body} pt-[120px]`}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={`2.5rem`} className={``}>
        {servicesP}
      </SimpleGrid>
    </div>
  );
};

export default ServicesList;
