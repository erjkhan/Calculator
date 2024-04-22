import React from "react"; 
// Import React (Mandatory Step) 
  
// Create our Button component as a functional component. 
const Button = (props) => { 
    return ( 
    <input type="button" value={props.label} onClick = {props.handleClick} /> 
    ); 
}; 
export default Button;