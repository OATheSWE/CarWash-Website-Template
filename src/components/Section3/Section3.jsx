import {
  Title,
  Text,
  Grid,
  Image,
  SimpleGrid,
} from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { section3, styles } from "../../data";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function Section3() {
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

  // Animation for the first grid col
  const slideUpAnimation3 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
    delay: 400,
  });

  // Animation for the first grid col
  const slideUpAnimation4 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
    delay: 600,
  });
  

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
    delay: 600,
  });

  // Animation for absolute image
  const imgAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale-100" : "scale-150",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
    delay: 800,
  });

  return (
    <section ref={ref} className={`w-full py-[140px] ${styles.body}`}>
      <Grid gutter={90} className={`font-sans`}>
        <Grid.Col span={{ base: 12, md: 5.8 }} className="">
          <animated.div style={slideUpAnimation1}>
            <Title className={`text-text`} order={1}>
              We redefine the art of automotive pampering
            </Title>
          </animated.div>

          <animated.div style={slideUpAnimation2}>
            <Text className="mt-7">
              What sets us apart is our team of passionate car enthusiasts who
              treat each car with the utmost care and expertise. With years of
              experience behind us, you can trust us to deliver exceptional
              results every time. Whether it's a basic wash or a full detailing,
              we approach every job with dedication and precision.
            </Text>
          </animated.div>

          <animated.div style={slideUpAnimation3}>
            <Text className="mt-7">
              Convenience is key at Carkiss. We understand that your time is
              valuable, which is why we've streamlined our booking process and
              optimized our service for efficiency. Say goodbye to long wait
              times and inconvenient scheduling – with Carkiss, getting your car
              washed is a breeze.
            </Text>
          </animated.div>

          <animated.div style={slideUpAnimation4}>
            <SimpleGrid
              cols={{ base: 1, xs: 2, md: 1 }}
              spacing="lg"
              className={`mt-7`}
            >
              {section3.map((section, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center bg-primary py-[6px] px-[16px] rounded-full max-w-[300px] w-full"
                >
                  <span className="w-[10px] h-[10px] rounded-full bg-white mr-2.5"></span>
                  <Text className="text-white text-[14px] font-semibold uppercase">
                    {section.text}
                  </Text>
                </div>
              ))}
            </SimpleGrid>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6.2 }} className="">
          <div className="relative">
            <animated.div
              style={rightColAnimation}
              className="max-lg:mx-auto max-w-[470px] lg:w-[470px] relative h-[370px]"
            >
              <Image
                src={ImageCollection.car2}
                className={`w-full h-full object-top rounded-xl`}
                alt="Car Image"
                loading="lazy"
              />
            </animated.div>
            <animated.div
              style={imgAnimation}
              className="w-[200px] h-[180px] bg-[#f8f8f8] rounded-xl flex justify-center items-center absolute -left-7 -bottom-[95px] md:left-16 lg:-left-7"
            >
              <Image
                src={ImageCollection.car3}
                className={`w-[120px] h-[120px]`}
                alt="Car Image"
                loading="lazy"
              />
            </animated.div>
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
