import { AppName } from "../global/globalConfig";

export const BaseColors = {
  neutral010: "#ffffff",
  neutral100: "#F9F9F9",
  neutral200: "#DFDFDF",
  neutral300: "#C4C4C4",
  neutral400: "#A9A9A9",
  neutral500: "#8E8E8E",
  neutral600: "#72736F",
  neutral700: "#585858",
  neutral900: "#202020",
};

export type BaseColorTypes = typeof BaseColors;

export type AppColorsType = BaseColorTypes & {
  branded: {
    brand100: string;
    brand500: string;
    brand700: string;
  };
  loader: string;
};

export const Colors: Record<AppName, BaseColorTypes & AppColorsType> = {
  mainApp: {
    ...BaseColors,
    branded: {
      brand100: "#BED3B5",
      brand500: "#266D07",
      brand700: "#1C5A05",
    },
    loader: "#266D07",
  },
  firstWLA: {
    ...BaseColors,
    branded: {
      brand100: "#FFDAB9",
      brand500: "#FF4500",
      brand700: "#FF0000",
    },
    loader: "#FF4500",
  },
  secondWLA: {
    ...BaseColors,
    branded: {
      brand100: "#D8BFD8",
      brand500: "#800080",
      brand700: "#4B0082",
    },
    loader: "#800080",
  },
};
