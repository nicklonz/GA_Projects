import React, { Component } from 'react';
import './App.css';
import Inventory from './Inventory.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      carSale: "Junk Heap",
      editable: true,
      featurePrice: 5500,
      discount: 500,
      username: "Mr. Customer",
      availableCars: ["XYZ Auto","Rust Bucket","Alpha Romeo", "Creep Jeep","Mercedes", "BMW", "Junk Heap", "Whatever", "Tesla"]
    }
  }

  toggleEditCarSpecial = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  toggleEditPriceSpecial = () => {
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

  handlePriceChange = (event) => {
    this.setState({
      featurePrice: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Car Dealer</h1>
        <h2>Potential Customers: API</h2>
        <Inventory
          username={this.state.username}
          carSale={this.state.carSale}
          editable={this.state.editable}
          toggleEditCarSpecial={this.toggleEditCarSpecial}
          toggleEditPriceSpecial={this.toggleEditPriceSpecial}
          availableCars={this.state.availableCars.sort()}
          discount={this.state.discount}
          adjustDiscount={this.adjustDiscount}
          handleItemChange={this.handleItemChange}
          handlePriceChange={this.handlePriceChange}
          featurePrice={this.state.featurePrice}
          totalPrice={this.state.featurePrice-this.state.discount}

        />
      </div>
    );
  }
}

export default App;
