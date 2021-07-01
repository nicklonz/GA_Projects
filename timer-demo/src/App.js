import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 const [counter, setCounter] = React.useState(60);


  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <h2>Timer Demo</h2>
      <div>Countdown: {counter}</div>
    </div>
  );
}

export default App;
