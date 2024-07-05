import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettingsState } from "./settings.interface";
import { Degrees } from "../../types/enums/Degrees";
import { Language } from "../../types/enums/Language";

const initialState: SettingsState = {
  temperatureScale: Degrees.CELSIUS,
  language: Language.EN,
  location: "London",
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
  },
});

export const settingsReducer = settingsSlice.reducer;
