import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { CurrentWeatherContainer } from "./components/current_weather_widget/CurrentWeatherContainer";
import { ForecastContainer } from "./components/forecast_widget/ForecastContainer";
import { UVIndexContainer } from "./components/uv_index_widget/UVIndexContainer";
import { HumidityContainer } from "./components/humidity_widget/HumidityContainer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./assets/fonts/fonts.css";
import { Overlay } from "./components/shared/Overlay";
import { WeatherLocation } from "./types/Location";
import { SearchResultsContainer } from "./components/navbar/search/SearchResultsContainer";
import { FeelsLikeContainer } from "./components/feels_like_widget/FeelsLikeContainer";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<WeatherLocation>>(
    []
  );

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar
          title="WeatherApp"
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
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
          style={{ marginTop: "20px", display: "flex", flexDirection: "row" }}
        >
          <UVIndexContainer />
          <HumidityContainer />
          <FeelsLikeContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
