import React from 'react';

const Inventory = (props) => {
  return (
    <div>
      <h2>Hello, {props.username}</h2>
      <h3>Vehicle Markdown Sale now on the<h2>{props.carSale}</h2> for an additional <h2>{props.discount}% off!!!</h2></h3>
      <button
        onClick={props.toggleEditCarSpecial}
      >{props.editable ? "Complete" : "Edit Car Special"}</button>
      { props.editable && (
      <div>
        <input 
              type="text" 
              value={props.carSale}
              onChange={props.handleItemChange} 
        />
          <button onClick={() => props.adjustDiscount(1)}>+</button>
          <button onClick={() => props.adjustDiscount(-1)}>-</button>
      </div>
      )}
      <h3>Vehicles available from A to Z are: </h3>
      
        {props.availableCars.map((car) =>
          <p><li>{car}</li></p>
        )}
      
    </div>
  )
}

export default Inventory;