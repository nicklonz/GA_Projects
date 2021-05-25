import React from 'react';

const HomePage = (props) => {
  return (
      <div>
        <p>Currently on Sale: {props.itemOnSale}</p>
        <p>Don't Miss the {props.discount}% off!</p>
        <button 
          onClick={props.toggleEditSaleItem}
        >{props.editable ? "End" : "Edit Sale Item"}</button>
        { props.editable && (
          <div>
        <input 
            type="text" 
            value={props.itemOnSale}
            onChange={props.handleItemChange}
        />
        <button onClick={() => props.adjustDiscount(1)}>+</button>
        <button onClick={() => props.adjustDiscount(-1)}>-</button>
        </div>
        )}       
      </div>
  )
}

export default HomePage;