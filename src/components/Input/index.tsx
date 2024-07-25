import { TextInput, TextInputProps } from "react-native";
import { useAppConfig } from "../../context/AppConfigProvider";
import { dynamicStyles } from "./styles";

export const Input: React.FC<TextInputProps> = (props) => {
  const { colorPalette } = useAppConfig();
  const styles = dynamicStyles(colorPalette);

  return <TextInput style={styles.input} {...props} />;
};
