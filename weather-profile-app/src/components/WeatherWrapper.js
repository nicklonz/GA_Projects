import React from 'react';
import Input from './Input';
import WeatherCard from './WeatherCard';

const WeatherWrapper = (props) => {
  return (
    <>
      <Input
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        errorText={props.errorText}
      />
      {props.weatherData && <WeatherCard weather={props.weatherData} />}
    </>
  )
}

export default WeatherWrapper;