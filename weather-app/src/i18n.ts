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
        humidity: {
          humidity: "Humidity",
        },
        UVIndex: {
          UVIndex: "UV Index",
          low: "Low",
          moderate: "Moderate",
          high: "High",
          veryHigh: "Very High",
          extreme: "Extreme",
        },
      },
    },
    pl: {
      translation: {
        currentWeather: {
          lastUpdate: "Ostatnia aktualizacja:",
        },
        humidity: {
          humidity: "Wilgotność",
        },
        UVIndex: {
          UVIndex: "Indeks UV",
          low: "Niski",
          moderate: "Średni",
          high: "Wysoki",
          veryHigh: "Bardzo wysoki",
          extreme: "Ekstremalny",
        },
      },
    },
  },
});

export default i18n;
