export interface Weather {
  degrees: number;
  feelsLike: number;
  cloudPercentage: number;
  humidityPercentage: number;
  uvIndex: number;
  description: string;
  icon: string;
}

export interface FutureWeather extends Weather {
  rain: number;
  time: string;
}
