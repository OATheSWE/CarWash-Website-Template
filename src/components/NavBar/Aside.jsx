import React, { useState, useEffect, useRef } from "react";
import { Group, Box, Burger, Drawer, ScrollArea, Image } from "@mantine/core";
import classes from "./NavBar.module.css";
import "./Navbar.css";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "expo-router";
import { styles } from "@/src/data";
import { ImageCollection } from "@/assets";
import ConfirmModal from "../ConfirmModal";

const asideLinks = [
  { text: "Dashboard", href: "/admin" },
  { text: "Logout", href: "/admin" },
];

export default function Aside() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const confirmModalRef = useRef(null); // Ref for ConfirmModal

  const handleLogout = () => {
    toggleDrawer();
    if (confirmModalRef.current) {
      confirmModalRef.current.openModal();
    }
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("aya");
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  return (
    <>
      <Box className="fixed z-[9999999999999] w-full">
        <nav
          className={`flex justify-between items-center shadow-xl bg-[#141c26] md:px-8 text-white font-sans ${classes.header} ${styles.body}`}
        >
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            size={23}
            color="white"
          />

          <Group h="100%" className="flex items-center">
            <Link href="/">
              <Image
                src={ImageCollection.logo}
                alt="Logo"
                className={`sm:w-[150px] sm:h-[70px] w-[110px]`}
              />
            </Link>
          </Group>
        </nav>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="60%"
          zIndex={1000000}
          className="font-sans text-black p-0 m-0"
          position="left"
        >
          <ScrollArea
            h={`calc(100vh - 80px)`}
            mx="-md"
            className="block mx-auto px-4"
            bg={`#141c26`}
          >
            {asideLinks.slice(0, 1).map((link, index) => (
              <Link
                key={index}
                href={`${link.href}`}
                className={`font-sans flex text-[17px] text-white transition duration-300 hover:text-gray-300`}
                onPress={toggleDrawer}
              >
                {link.text}
              </Link>
            ))}
            {asideLinks.slice(1).map((link, index) => (
              <Link
                key={index}
                href={`${link.href}`}
                className={`font-sans text-[17px] text-white transition duration-300 hover:text-gray-300`}
                onPress={handleLogout}
              >
                {link.text}
              </Link>
            ))}
          </ScrollArea>
        </Drawer>
      </Box>

      {/* ConfirmModal component instance */}
      <ConfirmModal
        ref={confirmModalRef}
        onConfirm={handleConfirmLogout}
        text={"Are you sure you want to logout?"}
      />
    </>
  );
}
