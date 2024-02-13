
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Infobox.css';

function Infobox({info}) {


  return (
    <div className='infobox'>
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={info.weatherImg}
              alt="weather image"
            />
            <CardContent>
              
              <Typography gutterBottom variant="h5" component="div" align="center">
                {info.city}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                <span>{info.description}</span>
              </div>
              <Typography variant="body2" color="text.secondary" component={"span"}>
              
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Temperature</span>
                  <span>{info.temp}°C</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Max Temperature</span>
                  <span>{info.tempMax}°C</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Min Temperature</span>
                  <span>{info.tempMin}°C</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Humidity</span>
                  <span>{info.humidity}%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Wind Speed</span>
                  <span>{info.windSpeed}mph</span>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>
  )
}

export default Infobox
