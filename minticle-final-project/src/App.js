import React from "react";
import DisplayAllPosts from './Components/DisplayAllPosts'
import './App.css';
import ClockElement from "./Components/ClockElement";

const App = ( ) => {
  return (
    <div>
      <DisplayAllPosts />
      <ClockElement />
    </div>
  );
};
export default App;
