import React from 'react';

const WeatherCard = (props) => {
    console.log(props);
    return (
        <>
            <h1>Current Weather:</h1>
            <p>Temperature: {props.weather.main.temp}</p>
            <p>Feels Like: {props.weather.main.feels_like}</p>
            <p>Humidity: {props.weather.main.humidity} percent</p>
            
        </>
    )
}

export default WeatherCard;