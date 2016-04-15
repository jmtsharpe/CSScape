React = require('react');
Prison = require('./../chapter1/prison');
Intro = require('./intro');

var App = React.createClass({

  getInitialState: function () {
    return ({ intro: true });
  },

  closeIntro: function () {
    debugger
    this.setState({ intro: false });
  },

  render: function () {
    return (
      <div>
        <header className="csscape-header">CSScape the Room</header>
        <Prison />
      </div>
    );
  }
});

module.exports = App;
