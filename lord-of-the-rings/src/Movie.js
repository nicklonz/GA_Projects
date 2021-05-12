import React, { Component } from 'react';

class Movie extends Component {
  render() {
    
    return (
      <div>
        <h2>The Lord of the Rings: {this.props.title}</h2>
        <p>{this.props.hours} hours {this.props.minutes} minutes</p>
        <p>Running time is {this.props.totalmin} minutes.</p>
        <p>{this.props.totalsec.toLocaleString()} in seconds.</p>
        <p>Rotten Tomato score is {this.props.tomato}.</p>
      </div>
    )
  }
}

export default Movie