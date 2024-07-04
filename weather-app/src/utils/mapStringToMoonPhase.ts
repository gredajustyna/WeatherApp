import { MoonPhase } from "../types/enums/MoonPhase";
export const mapStringToMoonPhase = (moonPhase: string): MoonPhase => {
  switch (moonPhase) {
    case "New Moon":
      return MoonPhase.NEW_MOON;
    case "Waxing Crescent":
      return MoonPhase.WAXING_CRESCENT;
    case "First Quarter":
      return MoonPhase.FIRST_QUARTER;
    case "Waxing Gibbous":
      return MoonPhase.WAXING_GIBBOUS;
    case "Full Moon":
      return MoonPhase.FULL_MOON;
    case "Waning Gibbous":
      return MoonPhase.WANING_GIBBOUS;
    case "Last Quarter":
      return MoonPhase.LAST_QUARTER;
    case "Waning Crescent":
      return MoonPhase.WANING_CRESCENT;
    default:
      throw new Error(`Unknown moon phase: ${moonPhase}`);
  }
};
