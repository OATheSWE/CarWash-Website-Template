import { Aside, Footer2 } from "@/src/components";
import { Admin, Login } from "@/src/views";
import { useSpring, animated } from "@react-spring/web";

const admin = () => {
  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.div style={slideInStyles}>
      {/* <Aside />
      <Admin />
      <Footer2 /> */}
      <Login />
    </animated.div>
  );
};

export default admin;
