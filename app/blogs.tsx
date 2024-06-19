import { ImageCollection } from "@/assets";
import { Blogs2, Contact, Header2 } from "@/src/components";
import { useSpring, animated } from "@react-spring/web";

const blogs = () => {
  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.div style={slideInStyles} className="overflow-hidden">
      <Header2
        img={ImageCollection.service9}
        topText={`blogs`}
        mainText={`Latest News & Articles`}
      />
      <Blogs2 />
    </animated.div>
  );
};

export default blogs;
