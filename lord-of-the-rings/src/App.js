import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  render() {
  
    let allMovies = this.props.movies.map((movie, index) =>
     
      <Movie
        title={movie.title}
        hours={movie.hours}
        minutes={movie.minutes}
        totalmin={movie.hours*60+movie.minutes}
        totalsec={movie.hours*3600+movie.minutes*60}

        tomato={movie.tomato}
        key={index}
      />
    )
    return (
      <div className="App">
          <h2>Welcome to Nick's Movie Demo Page</h2>
    {allMovies}
      </div>
    )
  }
}

export default App