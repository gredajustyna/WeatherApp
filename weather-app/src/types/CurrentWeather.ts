import { WeatherLocation } from "./Location";

export interface CurrentWeather {
  degrees: number;
  feelsLike: number;
  cloudPercentage: number;
  humidityPercentage: number;
  uvIndex: number;
  lastUpdated: string;
  description: string;
  icon: string;
  location: WeatherLocation;
}
