var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations</p>
      <ol>
        <li>
          <Link to='/?location=Jaipur'>Jaipur, Rajasthan</Link>
        </li>
        <li>
          <Link to='/?location=Silchar'>Silchar, Assam</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
