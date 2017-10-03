var React = require('react');
var WeatherForm = require('WeatherForm');
var Msg = require('Msg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(errorMessage){
        that.setState({isLoading: false});
        alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h4 className="text-center">Fetching weather...</h4>;
      }else if(temp && location){
        return <Msg temp={temp}  location={location}/>;
      }
    }
    return (
      <div>
        <h1  className="text-center">Weather App</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
