var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return{
      title: 'Error'
    };
  },
  proTypes:{
    title: React.PropTypes.string,
    //message: React.ProtoTypes.string.isRequired
    //error find a way around
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    var {title, message} = this.props;
    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Close
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
