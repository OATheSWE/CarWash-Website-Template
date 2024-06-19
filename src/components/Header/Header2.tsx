import {
  Container,
  Title,
  Text,
  Button,
  Box,
  BackgroundImage,
  Overlay,
} from "@mantine/core";
///@ts-ignore
import classes from "./Header.module.css";
import { styles } from "../../data";
import { ImageCollection } from "@/assets";
import { router } from "expo-router";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

export default function Header2({ topText, mainText, descText, img }: any) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <BackgroundImage src={img}>
      <header
        className={`${classes.root} ${styles.body} pt-36 h-[70vh] overflow-hidden z-50`}
        ref={ref}
      >
        <div className={`z-50`}>
          <div className={`z-50`}>
            <animated.div
              style={leftAnimation}
              className={`z-50 flex flex-col justify-center items-center`}
            >
              <div className="bg-[#ffffff1a] p-1 max-sm:px-3 rounded-full max-w-[120px] w-full flex space-x-3 justify-center items-center mb-6">
                <div className="w-[10px] h-[10px] rounded-full bg-white block"></div>
                <Text className="text-[14px] text-white font-semibold uppercase text-center">
                  {topText}
                </Text>
              </div>
              <Title
                className={`text-center text-[48px] max-sm:text-[30px] max-w-[600px] w-full font-sans text-white font-semibold mb-6`}
              >
                {mainText}
              </Title>

              <Text
                className={`text-white mb-6 max-w-[470px] w-full text-center`}
              >
                {descText}
              </Text>
            </animated.div>
          </div>
        </div>
      </header>
    </BackgroundImage>
  );
}
