import React, { useState } from 'react';

import './Navbar.css'

function Navbar({updateInfo}) {

    const [city,setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1031e82180981b48e6b9fba105594774";
    function getWeatherImage(weatherType) {
        switch(weatherType){
            case 'Clouds':
                return "https://i.ibb.co/kS59sqd/cloud.png";
            case 'Clear':
                return "https://i.ibb.co/rvcD50h/clear.png";
            case 'Rain':
                return "https://i.ibb.co/tqpdR1W/rain.png";
            case 'Mist':
                return "https://i.ibb.co/0mPNqM1/mist.png";
            case 'Snow':
                return "https://i.ibb.co/x5kr8T1/snow.png";
            default:
                return 'https://i.ibb.co/6sTW2r1/404.png';
        }
    };

    let getWeatherInfo = async ()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        if (jsonResponse.cod !== "404") {
            let result = {
                city: city.toUpperCase(),
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                description: jsonResponse.weather[0].description.charAt(0).toUpperCase() + jsonResponse.weather[0].description.slice(1),
                humidity: jsonResponse.main.humidity,
                windSpeed: jsonResponse.wind.speed,
                weatherImg: getWeatherImage(jsonResponse.weather[0].main),
            }
            console.log(result);
            return result;
        }else{
            return {
                city: "City Not Found",
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                description: "City Not Found",
                humidity: 0,
                windSpeed: 0,
                weatherImg: getWeatherImage('404'),
            }
        }
    }


    const handleChange =(event)=>{
       setCity(event.target.value)
    }

    const handleSubmit = async(event)=>{
       event.preventDefault()
       console.log(city);
       setCity("")
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo)
    }

    return (
        <>
            <div className="usercontainer">
                <form className='search'>
                    <input type="search" required onChange={handleChange} placeholder='Search Temperature here...' value={city}/>
                    <button type='submit' onClick={handleSubmit}>search</button>
                </form>
            </div>
            </>
    )
}

export default Navbar
