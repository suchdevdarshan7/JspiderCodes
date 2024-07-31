import { useEffect, useRef, useState } from 'react';
import './style.css';

// let apiUrl=https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;


function App() {
  let [temp, setTemp] = useState(0);
  let [city,setCity] = useState(0);
  let [data, setData] = useState([])
  function handleChange(e){
      console.log(e.target.value);
      let city = e.target.value;
      
      setCity(city);
  }
    function handleSubmit(e) {
      e.preventDefault();
      console.log(city);
    }
  async function fetchApi(city){
    let apiKey = "ff4a098172ecb0c2ac9d7fc26daa0083";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch();
    let data = await response.json();
    setData(data);

  }
  useEffect(()=>{
    
    fetchApi();
  })
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App
