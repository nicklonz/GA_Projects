import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import WeatherWrapper from './components/WeatherWrapper';
import Profile from './components/Profile';

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
    this.setState({ weatherData });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/profile">Profile</Link><br></br>
          <Link to="/weather">Weather</Link>
        </nav>
        <Route path="/profile" render={() =>
          <Profile/>
        } />
        <Route path="/weather" render={() =>
          <WeatherWrapper
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            weatherData={this.state.weatherData}
          />
        } />
      </div>
    );
  }
}

export default App;
