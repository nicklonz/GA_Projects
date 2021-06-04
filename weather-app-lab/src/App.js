import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';

import { fetchData } from './services/weather';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
      value: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const weatherData = await fetchData(this.state.value);
  //this.setState({ weatherData: weatherData })
    this.setState({ weatherData });
  }

  render() {
    return (
      <div className="App">
        <Input 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
        />
        { this.state.weatherData && <WeatherCard weather={this.state.weatherData} /> }
      </div>
    );
  }
}

export default App;
