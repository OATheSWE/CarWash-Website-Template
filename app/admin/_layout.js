import { Slot } from "expo-router";
import { Aside, Footer2 } from "../../src/components";

const admin = () => {
  return (
    <>
      <Aside />
      <Slot />
      {/* <Footer2 /> */}
    </>
  );
};

export default admin;
