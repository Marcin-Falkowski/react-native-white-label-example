import { StyleSheet } from "react-native";
import { AppColorsType, BaseColorTypes } from "../../theme";

export const dynamicStyles = (colors: BaseColorTypes & AppColorsType) => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 64,
      backgroundColor: colors.neutral010,
    },
    logo: {
      color: colors.branded.brand500,
      fontSize: 48,
      fontStyle: "italic",
    },
    inputWrapper: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 32,
      gap: 32,
    },
  });
};
