// hooks/useWeatherData.ts
import { useEffect, useState } from "react";
import { getWeatherData } from "../utils/getWeatherData";
import { CurrentWeather } from "../types/CurrentWeather";
import { useSelector } from "react-redux";
import {
  languageSelector,
  locationSelector,
  temperatureScaleSelector,
} from "../store/settings/settings.selector";

export const useWeatherData = () => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const temperatureScale = useSelector(temperatureScaleSelector);
  const language = useSelector(languageSelector);
  const location = useSelector(locationSelector);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData(temperatureScale, language, location);
        setWeather(data);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language, location, temperatureScale]);

  return { weather, loading, error };
};
