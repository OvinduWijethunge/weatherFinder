import React, { Component } from 'react';


class Weather extends Component {
    
    render() { 
        return ( 


            <div>
              {this.props.city && this.props.country  && <p className="weather__key">Location :<span className="weather__value"> {this.props.city}, {this.props.country} </span></p> } 
               
              {this.props.temp && <p className="weather__key">Tempeture :{this.props.temp}</p>  }
               
               {this.props.humidity && <p className="weather__key">Humidity  :{this.props.humidity}</p> }

               {this.props.description && <p className="weather__key">description  :{this.props.description}</p> }

                {this.props.error && <p> ERROR :{this.props.error}</p> }
                
            </div>
         );
    }
}
 
export default Weather;