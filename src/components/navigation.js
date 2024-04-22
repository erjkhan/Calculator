import React from 'react';
import CalculatorTitle from "./calculatorTitle.js"; 



class navigation extends React.Component {



		render (){


 return (


	<div className="nav" >
		<CalculatorTitle className="calculator-title" value="Calculator"/>
              <button  className="contact-title" onClick= {()=>this.props.onRouteChange('contact')}>contact</button>
    </div>
		
		);
}
}
export default navigation;  