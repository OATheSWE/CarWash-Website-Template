import { Title, Text, Grid, Image } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function WhyUs() {
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
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`w-full pt-[80px] ${styles.body}`}>
      <Grid gutter={90} className={`font-sans`}>
        <Grid.Col span={{ base: 12, md: 6 }} className="flex">
          <animated.div style={leftColAnimation} className={``}>
            <div className="flex justify-center items-center bg-primary py-[6px] px-[16px] rounded-full max-w-[300px] w-full">
              <span className="w-[10px] h-[10px] rounded-full bg-white mr-2.5"></span>
              <Text className="text-white text-[14px] font-semibold">WHY YOU SHOULD WORK WITH US</Text>
            </div>

            <Title className={`text-text mt-5`} order={1}>
              Why you should work with us
            </Title>

            <Text className="mt-5">
              At Carkiss, we pride ourselves on offering more than just a car
              wash service – we're your car's best friend. Our commitment to
              personalized care sets us apart. From the moment you drive in,
              expect a warm welcome and individualized attention tailored to
              your vehicle's unique needs
            </Text>

            <Btn
              text="Get Started"
              style={`rounded-md font-semibold border-[1.5px] border-primary h-[50px] bg-primary justify-center text-[20px] max-lg:text-[17px] px-6 text-white mt-6 hover:bg-transparent hover:text-primary`}
              click={handleScrollUp}
            />
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div
            style={rightColAnimation}
            className="flex items-stretch max-lg:mx-auto h-full"
          >
            <Image
              src={ImageCollection.car1}
              className={`w-full h-full object-cover object-top rounded-xl`}
              alt="Car Image"
              loading="lazy"
            />
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
