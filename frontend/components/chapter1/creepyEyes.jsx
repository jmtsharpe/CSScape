React = require('react')

CreepyEyes = React.createClass({
  render: function () {
    return (
      <div className="creepy-eyes-div">
        <div className="left-eye"></div>
        <div className="right-eye"></div>
      </div>
    );
  }
});

module.exports = CreepyEyes;
