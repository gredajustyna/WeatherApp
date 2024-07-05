import { settingsSlice } from "./settings.slice";

export const { setTemperatureScale, setLanguage, setLocation, setTimeFormat } =
  settingsSlice.actions;
