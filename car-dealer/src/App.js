import React, { Component } from 'react';
import './App.css';
import Inventory from './Inventory.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      carSale: "Junk Heap",
      editable: true,
      discount: 10,
      username: "Mr. Customer",
      availableCars: ["XYZ Auto","Alpha Romeo", "Creep Jeep","Mercedes", "BMW", "Junk Heap", "Whatever", "Tesla"]
    }
  }

  toggleEditCarSpecial = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  adjustDiscount = (num) => {
    this.setState({
      discount: this.state.discount + num
    })
  }
 
  handleItemChange = (event) => {
    this.setState({
      carSale: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Car Dealer</h1>
        <Inventory
          username={this.state.username}
          carSale={this.state.carSale}
          editable={this.state.editable}
          toggleEditCarSpecial={this.toggleEditCarSpecial}
          availableCars={this.state.availableCars.sort()}
          discount={this.state.discount}
          adjustDiscount={this.adjustDiscount}
          handleItemChange={this.handleItemChange}
        />
      </div>
    );
  }
}

export default App;
