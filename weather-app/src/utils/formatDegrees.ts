import { Degrees } from "../types/enums/Degrees";
import { getTemperatureSymbol } from "./getTemperatureSymbol";

export const formatDegrees = (degrees: number, scale: Degrees): string => {
  return `${Math.round(degrees)}${getTemperatureSymbol(scale)}`;
};
