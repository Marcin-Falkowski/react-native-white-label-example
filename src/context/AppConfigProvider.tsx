import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import DeviceInfo from "react-native-device-info";
import globalConfig, { AppName, DEFAULT_APP } from "../global/globalConfig";
import images from "../assets/images/images";
import { AppColorsType, BaseColorTypes, Colors } from "../theme";

interface AppConfigContexType {
  name: AppName;
  appId: string | null;
  displayName: string;
  exampleFlag: boolean;
  brandAssets: {
    logo: any;
  };
  colorPalette: BaseColorTypes & AppColorsType;
}

const AppConfigContex = createContext<AppConfigContexType | undefined>(
  undefined
);

export const AppConfigProvider = ({ children }: { children: ReactNode }) => {
  const [bundleId, setBundleId] = useState("");
  const result = Object.entries(globalConfig.apps).find(([_name, app]) =>
    app.bundleIds.includes(bundleId)
  );
  const [name, config] = result
    ? [result[0] as AppName, result[1]]
    : [DEFAULT_APP, globalConfig.apps[DEFAULT_APP]];

  const brandAssets = images[name];
  const colorPalette = Colors[name];

  useEffect(() => {
    const fetchBundleId = async () => {
      const id = DeviceInfo.getBundleId();
      setBundleId(id);
    };

    fetchBundleId();
  }, []);

  return (
    <AppConfigContex.Provider
      value={{
        name,
        appId: config.appId,
        exampleFlag: config.exampleFlag,
        brandAssets,
        displayName: config.displayName,
        colorPalette,
      }}
    >
      {children}
    </AppConfigContex.Provider>
  );
};

export const useAppConfig = () => {
  const ctx = useContext(AppConfigContex);

  if (ctx === undefined) {
    throw new Error(
      "useAppConfig can only be used in a AppConfigProvider tree"
    );
  }
  return ctx;
};
