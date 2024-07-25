import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";
import en from "./en.json";
import pl from "./pl.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  fallbackLng: { default: ["en"] },
  lng: getLocales()[0].languageTag.slice(0, 2).toLocaleLowerCase(),
  debug: false,
  interpolation: { escapeValue: false },
  compatibilityJSON: "v3",
});

export default i18n;
