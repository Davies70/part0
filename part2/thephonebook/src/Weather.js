import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) =>
        setWeather({
          temp: data.main.temp,
          wind: data.wind.speed,
          icon: data.weather.icon,
        })
      );
  });
  const tempInCelcius = (274.15 - weather.temp).toFixed(2);
  const imgIcon = ` https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>temperature: {tempInCelcius} Celcius</p>
      <img src={imgIcon} alt="Weather icon"></img>
      <p>wind: {weather.wind} m/s</p>
    </div>
  );
};

export default Weather;
