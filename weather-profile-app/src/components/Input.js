import React from 'react';

const Input = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <br></br><br></br>
            <label for="zip">Enter Zip Code: </label>
            <input type="text" id="zip" onChange={props.handleChange} />
            <br></br><br></br>
            <input type="submit" value="GET YOUR WEATHER!!!" />
        </form>
    )
}

export default Input;