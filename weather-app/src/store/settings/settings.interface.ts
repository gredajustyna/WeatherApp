import { Degrees } from "../../types/enums/Degrees";
import { Language } from "../../types/enums/Language";

export interface SettingsState {
  temperatureScale: Degrees;
  language: Language;
  location: string;
}
