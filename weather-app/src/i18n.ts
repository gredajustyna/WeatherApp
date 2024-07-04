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
        feelsLike: {
          title: "Feels like",
          feelsLike: {
            veryLow: "Much colder than the real temperature",
            low: "Colder than the real temperature",
            same: "Same as the real temperature",
            high: "Warmer than the real temperature",
            veryHigh: "Much warmer than the real temperature",
          },
        },
        moonPhase: {
          title: "Moon phase",
          phases: {
            newMoon: "New Moon",
            waxingCrescent: "Waxing Crescent",
            firstQuarter: "First Quarter",
            waxingGibbous: "Waxing Gibbous",
            fullMoon: "Full Moon",
            waningGibbous: "Waning Gibbous",
            lastQuarter: "Last Quarter",
            waningCrescent: "Waning Crescent",
          },
        },
        dayTime: {
          title: "Day time",
          sunrise: "Sunrise: {{time}}",
          sunset: "Sunset: {{time}}",
        },
        airQuality: {
          title: "Air quality",
          quality: {
            good: "Good",
            moderate: "Moderate",
            unhealthy1: "Unhealthy for sensitive group",
            unhealthy2: "Unhealthy",
            veryUnhealthy: "Very unhealthy",
            hazardous: "Hazardous",
          },
        },
        rainProbability: {
          title: "Rain probability",
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
        feelsLike: {
          title: "Temperatura odczuwalna",
          feelsLike: {
            veryLow: "Dużo chłodniej niż temperatura rzeczywista",
            low: "Chłodniej niż temperatura rzeczywista",
            same: "Tak samo jak temperatura rzeczywista",
            high: "Cieplej niż temperatura rzeczywista",
            veryHigh: "Dużo cieplej niż temperatura rzeczywista",
          },
        },
        moonPhase: {
          title: "Faza księżyca",
          phases: {
            newMoon: "Nów",
            waxingCrescent: "Przybywający sierp",
            firstQuarter: "Pierwsza kwadra",
            waxingGibbous: "Poszerzony Księżyc",
            fullMoon: "Pełnia",
            waningGibbous: "Garbaty Księżyc",
            lastQuarter: "Ostatnia kwadra",
            waningCrescent: "Malejący sierp",
          },
        },
        dayTime: {
          title: "Pora dnia",
          sunrise: "Wschód: {{time}}",
          sunset: "Zachód: {{time}}",
        },
        airQuality: {
          title: "Jakość powietrza",
          quality: {
            good: "Dobra",
            moderate: "Średnia",
            unhealthy1: "Niezdrowa dla grup wysokiego ryzyka",
            unhealthy2: "Niezdrowa",
            veryUnhealthy: "Bardzo niezdrowa",
            hazardous: "Niebezpieczna",
          },
        },
        rainProbability: {
          title: "Prawdopodobieństwo deszczu",
        },
      },
    },
  },
});

export default i18n;
