import { configureStore } from "@reduxjs/toolkit";
import { settingsSlice } from "./settings/settings.slice";

export const store = configureStore({
  reducer: settingsSlice.reducer,
});
