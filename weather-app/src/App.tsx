import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { CurrentWeatherContainer } from "./components/current_weather_widget/CurrentWeatherContainer";
import { ForecastContainer } from "./components/forecast_widget/ForecastContainer";
import { UVIndexContainer } from "./components/uv_index_widget/UVIndexContainer";

function App() {
  return (
    <div className="App">
      <Navbar title="WeatherApp" />
      <div style={{ display: "flex" }}>
        <CurrentWeatherContainer />
        <ForecastContainer />
      </div>
      <div style={{ marginTop: "20px" }}>
        <UVIndexContainer />
      </div>
    </div>
  );
}

export default App;
