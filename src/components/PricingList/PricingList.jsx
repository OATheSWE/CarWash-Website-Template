import { ImageCollection } from "@/assets";
import { blogPosts, prices, services, servicesPage, styles } from "@/src/data";
import {
  BackgroundImage,
  Image,
  List,
  ListItem,
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

const PricingList = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(prices.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 500, // Adjust this delay based on your preference
  });

  // Animation for the first grid col
  const slideUpAnimation1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the first grid col
  const slideUpAnimation2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
    delay: 200,
  });

  const pricingA = trail.map((style, index) => (
    <animated.div key={index} style={style} className={`max-md:mx-auto`}>
      <div className="max-w-[360px] h-full w-full bg-white p-7 rounded-xl">
        <Title order={2}>{prices[index].packageName}</Title>
        <Text size="lg">{prices[index].duration}</Text>
        <List withPadding>
          {prices[index].services.map((service, idx) =>
            typeof service === "string" ? (
              <ListItem key={idx} pb={`md`} className={`flex`}>
                {service}
              </ListItem>
            ) : (
              <ListItem key={idx} pb={`md`} className={`flex`}>
                {service.name} - {service.price}
              </ListItem>
            )
          )}
        </List>
        <Btn
          text="Request A Car Wash"
          style={`rounded-md font-semibold border-[1.5px] border-primary h-[50px] bg-primary justify-center text-[16px] w-full text-white mt-6 hover:bg-transparent hover:text-primary`}
          click={() => {
            router.push("/book");
          }}
        />
      </div>
    </animated.div>
  ));

  return (
    <section className={`${styles.body} bg-[#f8f8f8] py-[120px]`}>
      <animated.div ref={ref} style={slideUpAnimation1}>
        <Title className={`text-text text-center`} order={1}>
          Choose from our range of services
        </Title>
      </animated.div>

      <animated.div style={slideUpAnimation2}>
        <Text className="mt-7 text-center">
          Drive in for a service that goes beyond the surface, and experience
          the difference of a truly pampered ride.
        </Text>
      </animated.div>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={`2.5rem`}
        className={`mt-10`}
      >
        {pricingA}
      </SimpleGrid>
    </section>
  );
};

export default PricingList;
