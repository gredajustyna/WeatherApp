import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { CurrentWeatherContainer } from "./components/current_weather_widget/CurrentWeatherContainer";

function App() {
  return (
    <div className="App">
      <Navbar title="WeatherApp" />
      <CurrentWeatherContainer />
    </div>
  );
}

export default App;
