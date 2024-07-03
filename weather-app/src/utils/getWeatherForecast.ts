import { Degrees } from "../types/enums/Degrees";
import { Forecast } from "../types/Forecast";
import { FutureWeather } from "../types/Weather";

export const getWeatherForecast = async (
  scale: Degrees,
  location: string
): Promise<Forecast> => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=2&key=${apiKey}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);
    const forecast: Forecast = {
      futureWeather: [
        ...json.forecast.forecastday[0].hour.map(
          (hourlyWeather: any): FutureWeather => ({
            degrees:
              scale === Degrees.CELSIUS
                ? hourlyWeather.temp_c
                : hourlyWeather.temp_f,
            feelsLike: hourlyWeather.feelslike_c,
            cloudPercentage: hourlyWeather.cloud,
            humidityPercentage: hourlyWeather.humidity,
            uvIndex: hourlyWeather.uv,
            description: hourlyWeather.condition.text,
            icon: hourlyWeather.condition.icon,
            time: hourlyWeather.time,
            rain: hourlyWeather.chance_of_rain,
          })
        ),
        ...json.forecast.forecastday[1].hour.map(
          (hourlyWeather: any): FutureWeather => ({
            degrees:
              scale === Degrees.CELSIUS
                ? hourlyWeather.temp_c
                : hourlyWeather.temp_f,
            feelsLike: hourlyWeather.feelslike_c,
            cloudPercentage: hourlyWeather.cloud,
            humidityPercentage: hourlyWeather.humidity,
            uvIndex: hourlyWeather.uv,
            description: hourlyWeather.condition.text,
            icon: hourlyWeather.condition.icon,
            time: hourlyWeather.time,
            rain: hourlyWeather.chance_of_rain,
          })
        ),
      ],
    };

    console.log(forecast);
    return forecast;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
