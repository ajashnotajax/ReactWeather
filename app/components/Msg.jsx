var React = require('react');

var Msg = ({temp, location}) => {
  return(
    <div>
      <h3  className="text-center">It's {temp}c in {location}</h3>
    </div>
  )
}

module.exports = Msg;
