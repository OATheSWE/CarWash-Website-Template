import React, { useState, useEffect } from "react";
import { Group, Box, Burger, Drawer, ScrollArea, Text, Image } from "@mantine/core";
import classes from "./NavBar.module.css";
import "./Navbar.css";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "expo-router";
import { styles } from "@/src/data";
import Btn from "../button";
import { ImageCollection } from "@/assets";

const navLinks = [
  { text: "About Us", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Pricing", href: "/pricing" },
  { text: "Contact", href: "/contact" },
  { text: "Blogs", href: "/blogs" },
  { text: "Admin", href: "/admin" },
  { text: "Book Appointment", href: "/book" },
];

export default function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('bg-primary');
      } else {
        setBgColor('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className="fixed w-full z-[99999]">
      <nav
        className={`flex justify-between items-center ${bgColor} md:px-8 text-white font-sans ${classes.header} ${styles.body}`}
      >
        <Group h="100%" className="flex items-center">
          <Link href="/">
            <Image
              src={ImageCollection.logo}
              alt="Logo"
              className={`sm:w-[150px] sm:h-[70px] w-[110px]`}
            />
          </Link>
        </Group>

        <Group h="100%" gap={0} className="hidden lg:flex">
          {navLinks.slice(0, 4).map((link, index) => (
            <Link
              key={index}
              href={`${link.href}`}
              className={`font-sans ${classes.link} text-white`}
            >
              {link.text}
            </Link>
          ))}
          {navLinks.slice(6).map((link, index) => (
            <Link key={index} href={`${link.href}`} className="ml-5">
              <Btn
                text={<Text className="flex justify-center items-center"><span className="w-[10px] h-[10px] rounded-full bg-primary mr-2.5 transition-colors duration-300 group-hover:bg-white"></span>{link.text}</Text>}
                style={`rounded-md h-[45px] bg-white justify-center text-[16.5px] px-6 text-black border-2 hover:bg-transparent border-white font-sans font-semibold hover:text-white`}
              />
            </Link>
          ))}
        </Group>

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="md"
          size={23}
          color="white"
        />
      </nav>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="60%"
        hiddenFrom="md"
        zIndex={1000000}
        className="font-sans text-black p-0 m-0"
        position="left"
      >
        <ScrollArea
          h={`calc(100vh - 80px)`}
          mx="-md"
          className="block mx-auto px-4"
          bg={`#ffffff`}
        >
          {navLinks.slice(0, 6).map((link, index) => (
            <Link
              key={index}
              href={`${link.href}`}
              className={`font-sans ${classes.link}`}
              onPress={toggleDrawer}
            >
              {link.text}
            </Link>
          ))}
          {navLinks.slice(6).map((link, index) => (
            <Link key={index} href={`${link.href}`}>
              <Btn
                text={<Text className="flex justify-center items-center"><span className="w-[10px] h-[10px] rounded-full bg-white mr-2.5 transition-colors duration-300"></span>{link.text}</Text>}
                style={`rounded-md w-full h-[45px] mt-3 bg-primary justify-center text-[16.5px] font-medium px-0 text-white hover:bg-primary font-sans`}
                click={toggleDrawer}
              />
            </Link>
          ))}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
