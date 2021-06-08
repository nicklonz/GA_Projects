import React from 'react';

const Input = (props) => {
  return (
      <form>
        <h2>Super Weather App</h2>
        <h3><label for="zip">Enter Zip Code:   </label></h3>
        <input type="text" id="zip" placeholder="Fantasy Island Zip Code"nonChange={props.handleChange}/>
        <br></br><br></br>
        <input type="submit" value="GET YOUR WEATHER!!!" />
      </form>
  )
}

export default Input;