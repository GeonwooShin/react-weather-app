import React from "react";

const WeatherBox = ({ weatherData }) => {
  return (
    <div className="weather-box">
      <div className="weather-box-city">{weatherData && weatherData.name}</div>
      <h4 className="weather-box-temp">
        현재 기온: {weatherData && weatherData.main.temp}도
      </h4>
      <h4 className="weather-box-description">
        {weatherData && weatherData.weather[0].description}
      </h4>
    </div>
  );
};

export default WeatherBox;
