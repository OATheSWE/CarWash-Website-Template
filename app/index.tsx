import {
  Blogs,
  GetBack,
  Header,
  Section3,
  Services,
  WhyUs,
} from "@/src/components";
import { useSpring, animated } from "@react-spring/web";

const home = () => {
  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0%)" },
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.div style={slideInStyles} className="overflow-hidden pb-[100px]">
      <Header />
      <GetBack />
      <WhyUs />
      <Section3 />
      <Services />
      <Blogs />
    </animated.div>
  );
};

export default home;
