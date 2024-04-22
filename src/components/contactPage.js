 import React from "react"; // Import React (Mandatory Step). 

  

class contactPage extends React.Component {



        render (){
 
    return ( 
        <div>
     <p>CONTACT : erjkhan97@gmail.com</p>
         <button  className="contact-title" onClick= {()=>this.props.onRouteChange('home')}>Go Back</button>
         </div>
    ); 
} }

export default contactPage; 