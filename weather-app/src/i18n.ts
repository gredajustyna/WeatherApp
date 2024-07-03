import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        currentWeather: {
          lastUpdate: "Last updated:",
        },
      },
    },
    pl: {
      translation: {
        currentWeather: {
          lastUpdate: "Ostatnia aktualizacja:",
        },
      },
    },
  },
});

export default i18n;
