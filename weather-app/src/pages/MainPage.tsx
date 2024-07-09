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
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import background from "../assets/images/weather3.jpg";
import backgroundNight from "../assets/images/night_weather_3.jpg";
import { Divider } from "../components/shared/Divider";

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 98%;
  height: fit-content;
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
`;

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
  const appTheme = useSelector(themeSelector);

  if (!weather || !forecast || loading || forecastLoading)
    return (
      <ThemeProvider theme={appTheme === "light" ? lightTheme : darkTheme}>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: appTheme === "light" ? "white" : "black",
          }}
        >
          <Loading />
        </div>
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={appTheme === "light" ? lightTheme : darkTheme}>
      <div
        style={{
          backgroundImage:
            appTheme === "light"
              ? `url(${background})`
              : `url(${backgroundNight})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: -16,
          paddingTop: 16,
          paddingBottom: 1,
          color: appTheme === "light" ? "black" : "white",
          paddingRight: 16,
        }}
      >
        {isSearching && <Overlay />}
        <WeatherContext.Provider value={{ weather, forecast }}>
          <ContentWrapper>
            <div
              className="App"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "36%",
                rowGap: "16px",
                columnGap: "16px",
                height: "100%",
                justifyContent: "flex-start",
                paddingLeft: "16px",
              }}
            >
              <Navbar
                title="WeatherApp"
                isSearching={isSearching}
                setIsSearching={setIsSearching}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
              <CurrentWeatherContainer />
              <DayTimeContainer />
              <FeelsLikeContainer />
            </div>
            <Divider />
            <div
              className="App"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                rowGap: "16px",
                columnGap: "16px",
                height: "100%",
                justifyContent: "flex-start",
              }}
            >
              {isSearching && (
                <SearchResultsContainer
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                  setIsSearching={setIsSearching}
                />
              )}
              <ForecastContainer />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  gap: "16px",
                }}
              >
                <UVIndexContainer />
                <MoonPhaseContainer />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  gap: "16px",
                }}
              >
                <AirQualityContainer />
                <HumidityContainer />
                <RainProbabilityContainer />
              </div>
            </div>
          </ContentWrapper>
        </WeatherContext.Provider>
      </div>
    </ThemeProvider>
  );
};
