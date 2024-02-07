import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Infobox from '../Infobox/Infobox'
import './WeatherApp.css'


function WeatherApp() {

   const [weatherInfo,setWeatherInfo] = useState({
    city : "LONDON",
    temp : 19,
    tempMin : 21,
    tempMax : 28,
    description : "Overcast Clouds",
    humidity: 80,
    weatherImg: "https://i.ibb.co/kS59sqd/cloud.png",
    windSpeed: 10
   })

   const updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo)
   }

  return (
    <div>
        <h1 style={{textAlign:"center" ,}}>Weather App</h1>
        <Navbar updateInfo={updateInfo}/>
     <div className="details">
     <Infobox info={weatherInfo}/>
     
     </div>
    </div>
  )
}

export default WeatherApp
