import { Title, Text, Grid, Image, SimpleGrid } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { section3, styles } from "../../data";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function KnowHow1() {
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
              The latest water-saving technologies
            </Title>
          </animated.div>

          <animated.div style={slideUpAnimation2}>
            <Text className="mt-7">
              We understand the importance of preserving our natural resources,
              and that is why we have invested in innovative systems that
              minimize water consumption without compromising the quality of the
              wash. By choosing our car wash, you are not just taking care of
              your car, you are participating in the movement towards a more
              sustainable future.
            </Text>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} className="">
          <animated.div
            style={rightColAnimation}
            className="max-lg:mx-auto w-full relative h-[370px]"
          >
            <Image
              src={ImageCollection.about1}
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
