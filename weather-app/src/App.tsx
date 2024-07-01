import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { CurrentWeatherContainer } from "./components/current_weather_widget/CurrentWeatherContainer";
import { ForecastContainer } from "./components/forecast_widget/ForecastContainer";

function App() {
  return (
    <div className="App">
      <Navbar title="WeatherApp" />
      <div style={{ display: "flex" }}>
        <CurrentWeatherContainer />
        <ForecastContainer />
      </div>
    </div>
  );
}

export default App;
