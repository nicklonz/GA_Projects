import React from 'react';

const WeatherCard = (props) => {
    console.log(props);
    return (
        <>
            <h1>The current weather is: </h1>
            <p>Temperature: {props.weather.main.temp}</p>
        </>
    )
}

export default WeatherCard;