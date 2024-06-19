import { ImageCollection } from "@/assets";
import { Contact, Header2 } from "@/src/components";
import { useSpring, animated } from "@react-spring/web";

const contact = () => {
  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.div style={slideInStyles} className="overflow-hidden pb-[100px]">
      <Header2
        img={ImageCollection.contactHeader}
        topText={`CONTACT`}
        mainText={`Let's Connect for a Sparkling Experience!`}
      />
      <Contact />
    </animated.div>
  );
};

export default contact;
