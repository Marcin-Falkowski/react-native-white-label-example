import { AppName } from "../../global/globalConfig";

const images: Record<AppName, { logo: any }> = {
  mainApp: {
    logo: require("./mainApp/65_f.jpg"),
  },
  firstWLA: {
    logo: require("./firstWLA/9391712.png"),
  },
  secondWLA: {
    logo: require("./secondWLA/bird_2.jpg"),
  },
};
export default images;
