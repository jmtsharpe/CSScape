React = require('react');

Intro = React.createClass({

  render: function () {

    return (
      <div className="intro-text">
        <h2>You need to get out!</h2>
        <p>You find yourself in what appears to be a prison cell. But you don't remember committing any crime.</p>
        <p>In fact, you don't remember anything at all.</p>
        <p>[use your mouse to find clues to make your way out.]</p>
      </div>
    );
  }

});

module.exports = Intro;
