import { CurrentWeather } from "../types/CurrentWeather";

export const getWeatherData = async (): Promise<CurrentWeather> => {
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
    const currentWeather: CurrentWeather = {
      degrees: json.current.temp_c,
      feelsLike: json.current.feelslike_c,
      cloudPercentage: json.current.cloud,
      humidityPercentage: json.current.humidity,
      uvIndex: json.current.uv,
      lastUpdated: json.current.last_updated,
      description: json.current.condition.text,
      icon: json.current.condition.icon,
      location: json.location,
    };

    console.log(currentWeather);
    return currentWeather;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
