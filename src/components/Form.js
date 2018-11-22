import React, { Component } from 'react';

class Form extends Component {

    render() { 
        return (

   <div>
       <form onSubmit = {this.props.getVal}>
       <input type ="text" name = "city" placeholder = "city..." ref="xyz"/>
       <input type ="text" name = "country" placeholder = "country..." ref="xyz"/>
      
       <button>get weather..</button>
       </form>
         

   </div>


          );
    }
}
 
export default Form;