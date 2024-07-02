import { CurrentWeather } from "../types/CurrentWeather";
import { Degrees } from "../types/enums/Degrees";

export const getWeatherData = async (
  scale: Degrees
): Promise<CurrentWeather> => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=London&key=${apiKey}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);
    const currentWeather: CurrentWeather = {
      weather: {
        degrees:
          scale === Degrees.CELSIUS ? json.current.temp_c : json.current.temp_f,
        feelsLike:
          scale === Degrees.CELSIUS
            ? json.current.feelslike_c
            : json.current.feelslike_f,
        cloudPercentage: json.current.cloud,
        humidityPercentage: json.current.humidity,
        uvIndex: json.current.uv,
        description: json.current.condition.text,
        icon: json.current.condition.icon,
      },
      lastUpdated: json.current.last_updated,
      location: json.location,
    };

    console.log(currentWeather);
    return currentWeather;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
