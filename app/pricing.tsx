import { ImageCollection } from "@/assets";
import {
  Header2,
  PricingList,
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
    <animated.div style={slideInStyles} className="overflow-hidden">
      <Header2
        img={ImageCollection.pricingHeader}
        topText={`pricing`}
        mainText={`Pricing Plans`}
      />
      <PricingList />
    </animated.div>
  );
};

export default spring;
