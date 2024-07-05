import { Degrees } from "../../types/enums/Degrees";
import { Language } from "../../types/enums/Language";
import { TimeFormat } from "../../types/enums/TimeFormat";

export interface SettingsState {
  temperatureScale: Degrees;
  language: Language;
  location: string;
  timeFormat: TimeFormat;
  theme: string;
}
