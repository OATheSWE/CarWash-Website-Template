import { Anchor, Group, ActionIcon, rem, Text, Image } from "@mantine/core";
import classes from "./Footer.module.css";
import { IconImports, ImageCollection } from "../../../assets";
import { styles } from "../../data";
import { Link } from "expo-router";

const links = [
  { link: "/about", label: "About" },
  { link: "/services", label: "Our Services" },
  { link: "/pricing", label: "Pricing" },
  { link: "/blogs", label: "Blogs" },
  { link: "/admin", label: "Admin" },
  { link: "/contact", label: "Get in Touch" },
];

export default function Footer2() {
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
      className="text-white hover:text-gray-300 transition duration-300"
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={`${styles.body} ${classes.footer} bg-[#141c26] z-[999999] w-full`}>
      <div className={` ${classes.inner}`}>
        <Group h="100%" className="flex items-center">
          <Link href="/">
            <Image
              src={ImageCollection.logo}
              alt="Logo"
              className={`sm:w-[150px] sm:h-[70px] w-[110px]`}
            />
          </Link>
        </Group>

        <Group className={classes.links}>{items}</Group>
      </div>
    </div>
  );
}
