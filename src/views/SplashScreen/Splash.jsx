import { ImageCollection } from "@/assets";
import { Image, Text } from "@mantine/core";

const Splash = () => {
  return (
      <div className="w-full bg-primary h-screen flex flex-col justify-center items-center">
        <Image src={ImageCollection.logo} className="max-w-[240px] w-full" />
        <Text className="text-[15px] font-bold text-center text-white font-sans">
          Redefining The Art of Automotive Pampering
        </Text>
      </div>
  );
};

export default Splash;
