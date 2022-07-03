import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherBtn from "./components/WeatherBtn";
import ClipLoader from "react-spinners/ClipLoader";

export const APIkey = "0a35e22940484a0f9ba359de5fa6b224";

function App() {
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    city ? getWeatherByCity() : getCurLoc();
  }, [city]);

  const getCurLoc = () => {
    console.log("현재위치 가져옴");
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByLoc(lat, lon);
    });
  };

  const getWeatherByLoc = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setCity("");
    setWeatherData(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
        <div className="container">
          <ClipLoader color="#ffffff" loading={loading} size={30} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weatherData={weatherData} />
          <WeatherBtn getCurLoc={getCurLoc} cities={cities} setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;
