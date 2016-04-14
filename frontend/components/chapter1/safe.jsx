React = require('react');
Letter = require('./letter');

Safe = React.createClass({


  render: function () {

    if (!this.props.safeOpen) {
      return (
        <div className="safe-div">
          <div className="safe-face-top"></div>
          <div className="safe-face">
            <div className="safe-key-hole"></div>
            <div className="safe-key-hole-bottom"></div>
          </div>
        </div>
      );
    }
    return (
      <div className="safe-div">
        <div className="safe-face-top"></div>
        <div className="safe-face">
          <div className="safe-open-top"></div>
          <div className="safe-open">
            <Letter />
          </div>
        </div>
        <div className="safe-door-open"></div>
      </div>
    );
  }

});

module.exports = Safe;
