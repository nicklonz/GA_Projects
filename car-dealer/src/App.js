import React, { Component } from 'react';
import './App.css';
import Inventory from './Inventory.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Mr. Customer",
      availableCars: ["Alpha Romeo", "Mercedes", "BMW", "Junk Heap", "Whatever", "Tesla"]
    }
  }

  render() {

    return (
      <div className="App">
        <h1>Car Dealer</h1>
        <Inventory
          availableCars={this.state.availableCars.sort()}
        />
      </div>
    );
  }
}

export default App;
