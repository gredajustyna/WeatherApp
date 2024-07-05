import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettingsState } from "./settings.interface";
import { Degrees } from "../../types/enums/Degrees";
import { Language } from "../../types/enums/Language";
import { TimeFormat } from "../../types/enums/TimeFormat";

const initialState: SettingsState = {
  temperatureScale: Degrees.CELSIUS,
  language: Language.EN,
  location: "London",
  timeFormat: TimeFormat.TIME_24H,
};

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {
    setTemperatureScale: (
      state: SettingsState,
      action: PayloadAction<Degrees>
    ) => {
      state.temperatureScale = action.payload;
    },
    setLanguage: (state: SettingsState, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setLocation: (state: SettingsState, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setTimeFormat: (
      state: SettingsState,
      action: PayloadAction<TimeFormat>
    ) => {
      state.timeFormat = action.payload;
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
