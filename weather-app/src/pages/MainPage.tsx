import React, { createContext, useState } from "react";
import { CurrentWeatherContainer } from "../components/current_weather_widget/CurrentWeatherContainer";
import { FeelsLikeContainer } from "../components/feels_like_widget/FeelsLikeContainer";
import { ForecastContainer } from "../components/forecast_widget/ForecastContainer";
import { HumidityContainer } from "../components/humidity_widget/HumidityContainer";
import { MoonPhaseContainer } from "../components/moon_phase_widget/MoonPhaseContainer";
import { Navbar } from "../components/navbar/Navbar";
import { SearchResultsContainer } from "../components/navbar/search/SearchResultsContainer";
import { Overlay } from "../components/shared/Overlay";
import { UVIndexContainer } from "../components/uv_index_widget/UVIndexContainer";
import { WeatherLocation } from "../types/Location";
import { useWeatherData } from "../hooks/useWeatherData";
import { useForecastData } from "../hooks/useForecastData";
import { CurrentWeather } from "../types/CurrentWeather";
import { Forecast } from "../types/Forecast";
import { Loading } from "../components/navbar/loading/Loading";
import { DayTimeContainer } from "../components/day_time_widget/DayTimeContainer";
import { AirQualityContainer } from "../components/air_quality_widget/AirQualityContainer";
import { RainProbabilityContainer } from "../components/rain_probablilty_widget/RainProbabilityContainer";
import { useSelector } from "react-redux";
import { themeSelector } from "../store/settings/settings.selector";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

export const WeatherContext = createContext<{
  weather: CurrentWeather;
  forecast: Forecast;
}>({} as { weather: CurrentWeather; forecast: Forecast });

export const MainPage = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<WeatherLocation>>(
    []
  );
  const { weather, loading } = useWeatherData();
  const { forecast, loading: forecastLoading } = useForecastData();
  const theme = useSelector(themeSelector);

  if (!weather || !forecast || loading || forecastLoading)
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar
            title="WeatherApp"
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
          <Loading />
        </div>
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <Navbar
          title="WeatherApp"
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        <WeatherContext.Provider value={{ weather, forecast }}>
          <div className="App">
            {isSearching && <Overlay />}
            {isSearching && (
              <SearchResultsContainer
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                setIsSearching={setIsSearching}
              />
            )}
            <div style={{ display: "flex" }}>
              <CurrentWeatherContainer />
              <ForecastContainer />
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <UVIndexContainer />
              <HumidityContainer />
              <FeelsLikeContainer />
              <MoonPhaseContainer />
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <DayTimeContainer />
              <AirQualityContainer />
              <RainProbabilityContainer />
            </div>
          </div>
        </WeatherContext.Provider>
      </div>
    </ThemeProvider>
  );
};
