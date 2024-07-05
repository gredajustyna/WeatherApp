import { createSelector } from "@reduxjs/toolkit";

export const temperatureScaleSelector = createSelector(
  [(state) => state.temperatureScale],
  (_) => _
);

export const languageSelector = createSelector(
  [(state) => state.language],
  (_) => _
);

export const locationSelector = createSelector(
  [(state) => state.location],
  (_) => _
);

export const timeFormatSelector = createSelector(
  [(state) => state.timeFormat],
  (_) => _
);

export const themeSelector = createSelector([(state) => state.theme], (_) => _);
