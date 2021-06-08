import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Input from './components/Input';

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
      console.log(evt.target.value)
    }

    render() {
      return (
      <div className="App">
        <Input handleChange={this.handleChange} />
      </div>
    );
  }
} 

export default App;
