import { Degrees } from "../types/enums/Degrees";

export const getTemperatureSymbol = (scale: Degrees): string => {
  if (scale === Degrees.FAHRENHEIT) return "°F";
  return "°C";
};
