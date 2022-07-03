import React from "react";
import { Button } from "react-bootstrap";

const WeatherBtn = ({ cities, setCity, getCurLoc }) => {
  console.log(cities);

  return (
    <div>
      <Button
        className="weather-btn"
        variant="primary"
        onClick={() => getCurLoc()}
      >
        Current Location
      </Button>
      {cities.map((city, index) => (
        <Button
          className="weather-btn"
          variant="primary"
          key={index}
          onClick={() => setCity(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherBtn;
