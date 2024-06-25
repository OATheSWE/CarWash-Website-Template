import { ActionIcon, Group, Tooltip } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { IconImports } from "../../assets";

const InstagramIcon = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Change 100 to whatever threshold you prefer for showing the icon
      if (scrolled > 100) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showIcon && (
        <Group
          className="fixed bottom-10 right-7 z-50"
          style={{
            transition: 'opacity 0.5s',
            opacity: showIcon ? 1 : 0,
            transitionDelay: showIcon ? '0.3s' : '0s',
          }}
          gap="xs"
          justify="flex-end"
          wrap="nowrap"
        >
          <Tooltip label="Click Me">
          <ActionIcon
            size="xl"
            bg={`#152F60`}
            radius="xl"
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/";
            }}
          >
            <IconImports.Instagram size={25} color={`white`} />
          </ActionIcon>
          </Tooltip>
        </Group>
      )}
    </>
  );
};

export default InstagramIcon;
