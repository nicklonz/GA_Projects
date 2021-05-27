import React, { Component } from 'react';
import Header from './Header';
import Select from './Select';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <h5 className="pageHead"> Select a News Source from the Drop Down List:</h5>
          <Select default="the-wall-street-journal"/>
        </div>
      </div>
    );
  }
}

export default App;
