import React from 'react';

function ClockElement() {
  const [counter, setCounter] = React.useState(60);


  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <h3>Countdown: {counter}</h3>
    </div>
  );
}

export default ClockElement;