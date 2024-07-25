import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppConfigProvider } from "./context/AppConfigProvider";
import i18n from "./translations/i18n";
import * as RNLocalize from "react-native-localize";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);

  return (
    <SafeAreaProvider>
      <AppConfigProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </AppConfigProvider>
    </SafeAreaProvider>
  );
}
