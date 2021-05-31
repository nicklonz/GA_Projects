import React from 'react';

const Inventory = (props) => {
  return (
    <div>
      <h2>Hello, {props.username}</h2>
      <h3>Vehicle Markdown Special:<h2>{props.carSale} priced at ${props.discount.toLocaleString()} off!!!</h2></h3>
      <h3>Was ${props.featurePrice.toLocaleString()}</h3>
      <h3>Buy it now for ${props.totalPrice.toLocaleString()}</h3>
      <button
        onClick={props.toggleEditCarSpecial}
      >{props.editable ? "Car Completed" : "Edit Car Special"}</button>
      { props.editable && (
      <div>
        <input 
              type="text" 
              value={props.carSale}
              onChange={props.handleItemChange} 
        />
          <button onClick={() => props.adjustDiscount(100)}>+</button>
          <button onClick={() => props.adjustDiscount(-100)}>-</button>
        <br></br>
        <br></br>
          <button
            onClick={props.toggleEditPriceSpecial}
          >{props.editable ? "Price Completed" : "Edit Price Special"}</button>
          { props.editable && (
            <div>
              <input
                type= "number"
                value={props.featurePrice}
                onChange={props.handlePriceChange}
              />
            </div>
          )}
        
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