import React from "react";
import logo from './logo.svg';
import './App.css';

import CreateNewPost from './Components/CreateNewPost'

const App = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <CreateNewPost />
    </div>
  );
};
export default App;