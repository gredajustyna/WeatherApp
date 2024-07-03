// hooks/useWeatherData.ts
import { useEffect, useState } from "react";
import { Forecast } from "../types/Forecast";
import { getWeatherForecast } from "../utils/getWeatherForecast";
import { useSelector } from "react-redux";
import {
  locationSelector,
  temperatureScaleSelector,
} from "../store/settings/settings.selector";

export const useForecastData = () => {
  const [error, setError] = useState<Error | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [loading, setLoading] = useState(true);
  const scale = useSelector(temperatureScaleSelector);
  const location = useSelector(locationSelector);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherForecast(scale, location);
        setForecast(data);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location, scale]);

  return { forecast, loading, error };
};
