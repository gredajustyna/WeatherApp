import { MoonPhase } from "./enums/MoonPhase";
import { FutureWeather } from "./Weather";

export interface Forecast {
  futureWeather: FutureWeather[];
  moonPhase: MoonPhase;
  sunrise: string;
  sunset: string;
  chanceOfRain: number;
}
