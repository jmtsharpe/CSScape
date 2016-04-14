var React = require('react');

var Letter = React.createClass({
  getInitialState: function () {
    return ({ letterOpen: false })
  },



  render: function () {


      return (
        <div className="letter"></div>
      );



  }
});

module.exports = Letter;
