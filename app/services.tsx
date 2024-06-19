import { ImageCollection } from "@/assets";
import {
  Header2,
  ServicesList,

} from "@/src/components";
import { useSpring, animated } from "@react-spring/web";

const spring = () => {
  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.div style={slideInStyles} className="overflow-hidden pb-[100px]">
      <Header2
        img={ImageCollection.serviceHeader}
        topText={`services`}
        mainText={`Services List`}
      />
      <ServicesList />
    </animated.div>
  );
};

export default spring;
