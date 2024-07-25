import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import { Input, Submit } from "../../components";
import { dynamicStyles } from "./styles";
import { useAppConfig } from "../../context/AppConfigProvider";
import { useTranslation } from "react-i18next";

export const ExampleScreen: React.FC = () => {
  const { t } = useTranslation();
  const { brandAssets, displayName, colorPalette } = useAppConfig();
  const styles = dynamicStyles(colorPalette);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
        source={brandAssets.logo}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <Text style={styles.logo}>{displayName}</Text>
      <View style={styles.inputWrapper}>
        <Input />
        <Input />
        <Submit title="Submit" color={colorPalette.branded.brand700} />
        <Text style={{ color: "#000" }}>
          {t("hello", { name: displayName })}
        </Text>
      </View>
    </SafeAreaView>
  );
};
