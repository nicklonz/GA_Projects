  import logo from './logo.svg';
  import './App.css';

  import React, { Component } from 'react';
  import HomePage from './HomePage';

  class App extends Component {
    constructor() {
      super();

      this.state = {
        saleItem: "Screw Driver!!!",
        editable: true,
        discount: 5      
      }
    }

    toggleEditSaleItem = () => {
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
        saleItem: event.target.value
      })
    }

    render() {
      return (
      <div className="App">
          <h1>Welcome to the Hardware Store</h1>
          <HomePage 
            itemOnSale={this.state.saleItem} 
            editable={this.state.editable}
            toggleEditSaleItem={this.toggleEditSaleItem}
            discount={this.state.discount}
            adjustDiscount={this.adjustDiscount}
            handleItemChange={this.handleItemChange}
          />
      </div>
    );
  }
}

export default App;
