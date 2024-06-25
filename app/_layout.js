import React, { useState, useEffect } from "react";
import { Divider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import '@mantine/notifications/styles.css';
import "../global.css";
import { Slot } from "expo-router";
import { Footer, InstagramIcon, NavBar } from "../src/components";
import { Splash } from "../src/views";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from '@mantine/notifications';


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timer to hide the splash screen after 5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <MantineProvider>
      <ModalsProvider>
        <Notifications />
        {showSplash ? (
          <Splash />
        ) : (
          <div>
            <NavBar />
            <Slot />
            <InstagramIcon />
            <Footer />
          </div>
        )}
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
