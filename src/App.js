import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";


//const API = "1d287c7596d750bcd38e2aeb3a47330c";

class App extends Component {
  constructor(props) {
    super(props);
    this.getVal = this.getVal.bind(this);
  }
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getVal = async e => {
    e.preventDefault();
    // var key = '&APPID=1d287c7596d750bcd38e2aeb3a47330c';
    //var api ='https://api.openweathermap.org/data/2.5/weather?q=';
    var city = e.target.city.value;
    var country = e.target.country.value;
    var nova = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=1d287c7596d750bcd38e2aeb3a47330c`
    );
    var data = await nova.json();
    console.log(data);
        if(city && country)
        {
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }
     else{
      this.setState({ error : "Pleace Enter a City and Country...."});
     
     }
  };

  //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=
  render() {
    return (
      <div>
        <div className="wrapper">
            <div className="main">
                <div className="container">
                   <div className="row">
                     <div className="col-xs-5 title-container">
                     <Title />
                     </div>
                     <div className="col-xs-7 form-container">
                                            <Form getVal={this.getVal} />
                                <Weather
                                temp={this.state.temp}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.humidity}
                                description={this.state.description}
                                error={this.state.error}
                                />
                     </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}



        


export default App;
