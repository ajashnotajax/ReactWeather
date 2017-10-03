var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p className="text-center">This app gets you the weather of any place you want to search.
        This is built using React framework.
      </p>
      <p>Some of the tools I've used are listed below :</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> API
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
