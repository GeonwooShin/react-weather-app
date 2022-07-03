import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherBtn from "./components/WeatherBtn";

const APIkey = "0a35e22940484a0f9ba359de5fa6b224";

function App() {
  useEffect(() => {
    getCurLoc();
  }, []);

  const getCurLoc = () => {
    console.log("현재위치 가져옴");
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurLoc(lat, lon);
    });
  };

  const getWeatherByCurLoc = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };
  return (
    <div className="App">
      <div className="container">
        <WeatherBox />
        <WeatherBtn />
      </div>
    </div>
  );
}

export default App;
