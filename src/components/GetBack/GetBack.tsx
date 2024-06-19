import { getBack, styles } from "@/src/data";
import { Text, Title, SimpleGrid, Card } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useTrail, animated, useSpring } from "@react-spring/web";
import * as React from "react";

export default function GetBack() {
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

  const trail = useTrail(getBack.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const features = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <Card
        radius="xl"
        className={`p-[30px] pt-[20px] h-[230px] border border-[#dbdbdb] ${getBack[index].style}`}
      >
        <Title order={3} className={`font-sans font-semibold`}>
          {getBack[index].title}
        </Title>
        <Text className={`my-[20px] text-[18px]`}>
          {getBack[index].description}
        </Text>
      </Card>
    </animated.div>
  ));

  return (
    <div ref={ref} className={`${styles.body} pt-[80px]`}>
      <animated.div style={headAnimation}>
        <Title className="font-semibold text-center font-sans text-text" order={1}>
          Get back on the road in no time!
        </Title>
      </animated.div>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="lg"
        className={`mt-[50px]`}
      >
        {features}
      </SimpleGrid>
    </div>
  );
}
