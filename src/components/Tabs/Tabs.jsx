import { Title, Text, Grid, Image, Tabs } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles, tabsD } from "../../data";
import Btn from "../button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";
import classes from "./Tabs.module.css";

export default function TabsAbout() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
    delay: 700,
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section
      ref={ref}
      className={`w-full pt-[80px] ${styles.body}`}
      role="region"
      aria-labelledby="tabs-section"
    >
      <Grid gutter={90} className={`font-sans`} role="presentation">
        <Grid.Col span={{ base: 12, md: 6 }} className="">
          <animated.div
            style={rightColAnimation}
            className="flex items-stretch max-lg:mx-auto h-full"
          >
            <iframe
              src={ImageCollection.aboutVideo}
              className="w-full h-[300px] object-cover rounded-xl"
              title="About Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label="About Video"
            ></iframe>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div style={leftColAnimation} className="">
            <Tabs
              variant="pills"
              defaultValue="sets"
              classNames={classes}
              aria-label="About Tabs"
            >
              <Tabs.List grow role="tablist">
                {tabsD.map((tab, index) => (
                  <Tabs.Tab
                    value={tab.value}
                    key={index}
                    role="tab"
                    aria-selected={tab.value === "sets" ? "true" : "false"}
                  >
                    {tab.text}
                  </Tabs.Tab>
                ))}
              </Tabs.List>

              {tabsD.map((tab, index) => (
                <Tabs.Panel
                  value={tab.value}
                  key={index}
                  id={`tab-${tab.value}`}
                  aria-labelledby={`tab-${tab.value}`}
                  role="tabpanel"
                >
                  <Title className={`text-text mt-5`} order={1}>
                    {tab.title}
                  </Title>
                  <Text className="mt-5">{tab.desc}</Text>
                </Tabs.Panel>
              ))}
            </Tabs>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
