import { Title, Text, Grid, Image, SimpleGrid } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { section3, styles } from "../../data";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function KnowHow3() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
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

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
    delay: 600,
  });

  return (
    <div ref={ref} className={`w-full pt-[70px] ${styles.body}`}>
      <Grid gutter={90} className={`font-sans`}>
        <Grid.Col span={{ base: 12, md: 6 }} className="lg:flex justify-center items-center lg:flex-col">
          <animated.div style={slideUpAnimation1}>
            <Title className={`text-text`} order={2}>
              We put customer satisfaction first
            </Title>
          </animated.div>

          <animated.div style={slideUpAnimation2}>
            <Text className="mt-7">
              Our skilled team of professionals provides thorough cleaning
              services, ensuring that your vehicle not only looks its best, but
              also performs optimally. We know that your vehicle is an
              investment, and we treat it with the care and attention it
              deserves.
            </Text>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} className="">
          <animated.div
            style={rightColAnimation}
            className="max-lg:mx-auto w-full relative h-[370px]"
          >
            <Image
              src={ImageCollection.about3}
              className={`w-full h-full object-top rounded-xl`}
              alt="Car Image"
              loading="lazy"
            />
          </animated.div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
