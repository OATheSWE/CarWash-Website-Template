import { Title } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import KnowHow1 from "./KnowHow1";
import KnowHow2 from "./KnowHow2";
import KnowHow3 from "./KnowHow3";

export default function KnowHowMain() {
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

  return (
    <section className={`py-[100px] bg-[#f8f8f8] mt-[100px]`}>
      <animated.div ref={ref} style={slideUpAnimation1}>
        <Title className={`text-text text-center`} order={1}>
          We know how to make world better
        </Title>
      </animated.div>
      <KnowHow1 />
      <KnowHow2 />
      <KnowHow3 />
    </section>
  );
}
