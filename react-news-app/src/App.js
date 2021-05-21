import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsSource: "",
      apiKey: "",
      news: []
    }
  }

  async componentDidMount() {
    // do an axios call to get top stories

    // update state with the response

  }

  render() {
    return (
      <div className="app" >
        <Header />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
