 import React from "react"; // Import React (Mandatory Step). 
import OutputScreenRow from "./outputScreenRow.js"; // Import Output Screen Row. 
  
// Functional Component. 
// Use to hold two Screen Rows. 
const OutputScreen = (props) => { 
    return ( 
        <div className="screen"> 
            <OutputScreenRow  value={props.question} /> 
            <OutputScreenRow value={props.answer} /> 
        </div> 
    ); 
}; 
export default OutputScreen; 