import React from 'react';

const Input = (props) => {
  return (
      <from>
        <br></br>
        <label for="zip">Enter Zip Code:   </label>
        <br></br><br></br>
        <input type="text" id="zip" placeholder="Fantasy Island Zip Code"/>
        <br></br><br></br>
        <input type="submit" value="GET YOUR WEATHER!!!" />
      </from>
  )
}

export default Input;