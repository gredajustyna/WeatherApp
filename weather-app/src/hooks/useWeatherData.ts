// hooks/useWeatherData.ts
import { useEffect, useState } from "react";
import { getWeatherData } from "../utils/getWeatherData";
import { CurrentWeather } from "../types/CurrentWeather";

export const useWeatherData = () => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData();
        setWeather(data);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { weather, loading, error };
};
