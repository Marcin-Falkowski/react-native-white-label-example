import { StyleSheet } from "react-native";
import { BaseColorTypes, AppColorsType } from "../../theme";

export const dynamicStyles = (colors: BaseColorTypes & AppColorsType) => {
  return StyleSheet.create({
    input: {
      backgroundColor: colors.neutral010,
      width: "100%",
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.branded.brand100,
    },
  });
};
