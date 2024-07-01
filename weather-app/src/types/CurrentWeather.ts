import { WeatherLocation } from "./Location";
import { Weather } from "./Weather";

export interface CurrentWeather {
  weather: Weather;
  lastUpdated: string;
  location: WeatherLocation;
}
