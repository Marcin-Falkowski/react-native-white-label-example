type AppConfig = {
  bundleIds: string[];
  appId: string | null;
  exampleFlag: boolean;
  displayName: string;
};

type GlobalConfig = {
  apps: {
    [key: string]: AppConfig;
  };
};

export type AppName = "mainApp" | "firstWLA" | "secondWLA";

export const DEFAULT_APP: AppName = "mainApp";

const globalConfig: GlobalConfig = {
  apps: {
    mainApp: {
      bundleIds: ["com.mainApp"],
      displayName: "MAIN APP",
      appId: null,
      exampleFlag: false,
    },
    firstWLA: {
      bundleIds: ["com.firstWLA"],
      displayName: "FIRST WLA APP",
      appId: "1",
      exampleFlag: true,
    },
    secondWLA: {
      bundleIds: ["com.secondWLA"],
      displayName: "SECOND WLA APP",
      appId: "2",
      exampleFlag: true,
    },
  },
};

export default globalConfig;
