import { configureStore } from "@reduxjs/toolkit";
import { settingsReducer } from "./settings/settings.slice";
import { loadState } from "./localStorage";
import { SettingsState } from "./settings/settings.interface";

const persistedState = loadState() as SettingsState;

export const store = configureStore({
  reducer: settingsReducer,
  preloadedState: persistedState,
});
