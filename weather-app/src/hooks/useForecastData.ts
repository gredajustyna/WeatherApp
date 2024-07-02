// hooks/useWeatherData.ts
import { useEffect, useState } from "react";
import { Forecast } from "../types/Forecast";
import { getWeatherForecast } from "../utils/getWeatherForecast";

export const useForecastData = () => {
  const [error, setError] = useState<Error | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherForecast();
        setForecast(data);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { forecast, loading, error };
};
