import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      click: false
    }
  }
  hoverEnter = () => {
    this.setState({
      hover: true
    })
  }
  hoverLeave = () => {
    this.setState({
      hover: false
    })
  }
  handleClick = () => {
    this.setState({
      click: true
    })
  }
  render() {
    const buttonStyles = {
      borderRadius: "5px",
      backgroundColor: this.state.hover ? "#6fc6ff" : "#55acee",
      padding: "15px 25px",
      margin: "20px",
      boxShadow: this.state.click ? "0px 1px 0px 0px" : "0px 5px 0px 0px #3c93d5",
      transform: this.state.click ? "translate(0px, 5px)" : "translate(0px, 0px)"
    }
    return (
      <div className="App">
        <a
          href="#"
          style={buttonStyles}
          onMouseEnter={this.hoverEnter}
          onMouseLeave={this.hoverLeave}
          onClick={this.handleClick}
        >Click Me!!!</a>
      </div>
    );
  }
}
export default App;