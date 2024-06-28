import { ImageCollection } from "@/assets";
import {
  Header2,
  KnowHowMain,
  Tabs,
} from "@/src/components";
import { useSpring, animated } from "@react-spring/web";

const about = () => {
  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0%)" },
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.div style={slideInStyles} className="overflow-hidden pb-[100px]">
      <Header2
        img={ImageCollection.aboutHeader}
        topText={`about`}
        mainText={`Our Company`}
        descText={`We have become a preferred partner to leading biofuel refiners, major oil companies, blenders, retailers, and other commodity companies`}
      />
      <Tabs />
      <KnowHowMain />
    </animated.div>
  );
};

export default about;
