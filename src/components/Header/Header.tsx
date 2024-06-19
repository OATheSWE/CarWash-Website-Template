import { Container, Title, Text, Button, Box } from "@mantine/core";
///@ts-ignore
import classes from "./Header.module.css";
import { styles } from "../../data";
import Btn from "../button";
import { ImageCollection } from "@/assets";
import { router } from "expo-router";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    // Adjust the value (-100) based on how much you want the page to scroll down
    window.scrollTo({ top: scrollPosition + 1100, behavior: "smooth" });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <header
      className={`${classes.root} ${styles.body} h-screen relative overflow-hidden`}
      ref={ref}
    >
      <div className={classes.inner}>
        <div className={classes.content}>
          <video autoPlay muted loop className={classes.video}>
            <source src={ImageCollection.cover} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <animated.div style={leftAnimation}>
            <div className="bg-[#FFFFFF1A] p-1 max-sm:px-3 rounded-full max-w-[400px] w-full flex space-x-3 justify-center items-center mb-6">
              <div className="max-sm:w-[15px] sm:w-[10px] h-[10px] rounded-full bg-white block"></div>
              <Text className="text-[14px] text-white font-semibold uppercase text-center">
                Redefine the art of automotive pampering
              </Text>
            </div>
            <Title
              className={`text-[48px] max-sm:text-[30px] max-w-[600px] w-full font-sans text-white font-semibold mb-6`}
            >
              Unleash the Shine Your Ride Deserves
            </Title>

            <Text className={`text-white mb-6 max-w-[470px] w-full`}>
              Step into a world where precision meets passion, and every vehicle
              gets the royal treatment it deserves.
            </Text>

            <div className="flex min-[480px]:space-x-7 max-[480px]:flex-col">
              <Btn
                text={
                  <div className="flex justify-center items-center">
                    <span className="w-[10px] h-[10px] rounded-full bg-white mr-2.5 transition-colors duration-300 group-hover:bg-primary"></span>
                    Get Started
                  </div>
                }
                style="rounded-md h-[45px] mt-3 bg-primary justify-center text-[16.5px] px-7 text-white hover:bg-white hover:text-black font-sans font-semibold"
                click={handleScrollUp}
              />
              <Btn
                text={
                  <div className="flex justify-center items-center">
                    <span className="w-[10px] h-[10px] rounded-full bg-primary mr-2.5 transition-colors duration-300 group-hover:bg-white"></span>
                    Pricing
                  </div>
                }
                style="rounded-md h-[45px] mt-3 bg-white justify-center text-[16.5px] px-7 text-black hover:bg-primary hover:text-white font-sans font-semibold"
                click={() => {
                  router.push("/pricing");
                }}
              />
            </div>
          </animated.div>
        </div>
      </div>
    </header>
  );
}
