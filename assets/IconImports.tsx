// Exporting Icons from IconImport.tsx
import { AntDesign, Entypo, Feather, Fontisto  } from "@expo/vector-icons";

const IconImports = {
  Location: (props: any) => <Feather name="map-pin" {...props} />,
  Instagram: (props: any) => <AntDesign name="instagram" {...props} />,
  Email: (props: any) => <Entypo name="email" {...props} />,
  Phone: (props: any) => <Feather name="phone" {...props} />,
  Sun: (props: any) => <Fontisto name="day-sunny" {...props} />,

};

export { IconImports };