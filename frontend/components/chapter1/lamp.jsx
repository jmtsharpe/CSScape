React = require('react');

Lamp = React.createClass({

  render: function () {
    return (
      <div className="lamp-container">
          <div className="lamp-wall-mount"></div>
          <div className="lamp-wall-buttress"></div>
          <div className="lamp-bulb-bottom"></div>
          <div className="lamp-bulb"></div>
      </div>
    )
  }
});

module.exports = Lamp;
