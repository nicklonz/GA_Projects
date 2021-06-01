import axios from 'axios';
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
      userData: null,
      availableCars: ["XYZ Auto","Rust Bucket","Alpha Romeo", "Creep Jeep","Mercedes", "BMW", "Junk Heap", "Whatever", "Tesla"]
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api')
      .then(data => {
          console.log(data);
          this.setState({
            userData: data.data.results[0]
          })
      })
      .catch(err => console.log(err))
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
    const featurePrice = parseInt(event.target.value);
    this.setState({
      featurePrice
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Car Dealer</h1>
        <h2>Potential Customers: </h2>
        { this.state.userData 
          ? <p>{this.state.userData.name.first} {this.state.userData.name.last}
            <br></br>{this.state.userData.email}<br></br>
            {this.state.userData.phone}</p>
        : <p>Loading...</p>}

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
