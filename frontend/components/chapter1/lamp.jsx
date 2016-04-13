React = require('react');

Lamp = React.createClass({

  render: function () {

    if (this.props.lightsOn) {
      return (
        <div className="lamp-container">
            <div className="lamp-wall-mount"></div>
            <div className="lamp-wall-buttress"></div>
            <div className="lamp-bulb-bottom"></div>
            <div className="lamp-bulb-on"></div>
        </div>
      )
    }

    return (
      <div className="lamp-container">
          <div className="lamp-wall-mount"></div>
          <div className="lamp-wall-buttress"></div>
          <div className="lamp-bulb-bottom"></div>
          <div className="lamp-bulb-out"></div>
      </div>
    )
  }
});

module.exports = Lamp;
