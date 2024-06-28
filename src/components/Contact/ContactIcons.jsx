import { Text, Box, Stack, rem } from "@mantine/core";
import classes from "./ContactInfo.module.css";
import { IconImports } from "../../../assets";

function ContactIcon({ icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <div className="flex w-[50px] h-[50px] justify-center items-center mr-5 bg-accent rounded-lg">
        {icon}
      </div>
      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

const MOCKDATA = [
  {
    title: "Email",
    description: "info@car-kiss.com",
    icon: <IconImports.Email size={21} color={`#152F60`} />,
  },
  {
    title: "Phone",
    description: "+45 18 08 18 82",
    icon: <IconImports.Phone size={21} color={`#152F60`} />,
  },
  {
    title: "Address",
    description: "Spinderiets p-hus, 2500 valby",
    icon: <IconImports.Location size={21} color={`#152F60`} />,
  },
  {
    title: "Working hours",
    description: "Mon - Fri 10am - 6pm,<br />Sat & Sun 10am - 4pm",
    icon: <IconImports.Sun size={21} color={`#152F60`} />,
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
