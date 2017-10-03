var React = require('react');
var WeatherForm = require('WeatherForm');
var Msg = require('Msg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(e){
        that.setState({
          isLoading: false,
          errorMessage: e
        });
    });
  },
  componentDidMount: function(){
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h4 className="text-center">Fetching weather...</h4>;
      }else if(temp && location){
        return <Msg temp={temp}  location={location}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1  className="text-center page-title">Weather App</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
