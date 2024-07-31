import React, { useEffect, useState } from "react";

export default function App2() {
  const [data, setData] = useState({});
  const [place, setPlace] = useState("");

  const getWeather = () => {
    let city = place;
    let apiKey = "1dea456579e71c38a229ac4010195250";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const fetchApi = async () => {
      try {
        let response = await fetch(apiUrl);
        let finaldata = await response.json();
        console.log(finaldata);
        setData(finaldata);
      } catch (error) {
        console.log(`${error}`);
      }
    };

    fetchApi();
  };

  const getInputValue = (event) => {
    setPlace(place => event.target.value);
  };

  return (
    <div>
      <input
        onChange={getInputValue}
        type="text"
        placeholder="Search your city"
      />
      <button onClick={getWeather}>Fetch</button>

      <h2>{data.name}</h2>
    {/* Conditional rendering */}
      <p>{data.main && data.main.temp}°C</p>
      <p>{data.main && data.main.humidity}%</p>
      <p>{data.wind && data.wind.speed}km/h</p>
    </div>
  );
}
