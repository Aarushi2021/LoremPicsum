import React,{useState} from "react";
import axios from 'axios';
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import Images from "./Components/Images/Images"
function App() {

  const cityName = 'Delhi'; // Replace with 'Delhi' or any other desired city name
  const apiKey = '2e51c8f7f4c66066441fea2eb9ab1ca1';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  

  return (

    <div className="App">
   <WeatherApp/> 
   <Images/>
    </div>
  );
}

export default App;
