import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Input from './components/Input';

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        weatherData: null,
        value: '',
      }
    }
    render() {
      return (
      <div className="App">
        <Input />
      </div>
    );
  }
} 

export default App;
