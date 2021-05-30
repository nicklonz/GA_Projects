import React from 'react';

const Inventory = (props) => {
  return (
    <div>
      <h2>Hello, {props.username}</h2>

      <h3>Vehicles Available from A to Z are: </h3>
      
        {props.availableCars.map((car) =>
          <p><li>{car}</li></p>
        )}
      
    </div>
  )
}

export default Inventory;