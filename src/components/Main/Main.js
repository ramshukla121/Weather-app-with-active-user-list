import React, { useState } from 'react'
import WeatherApp from '../WeatherApp/WeatherApp'
import User from '../User/User';

const Main = (props) => {


  return (
    <div>
      <div className="centered-title">
        <h2>{props.name ? `Welcome - ${props.name}` : ""}</h2>
      </div>
      <hr />
      <div className="detail half-screen">
      <WeatherApp/>
      <User/>
     
      </div>
      
    </div>
  )
}

export default Main
