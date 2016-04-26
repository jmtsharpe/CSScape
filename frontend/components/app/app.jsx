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
        <header className="csscape-header">
          <ul className="credits-and-title">
            <li>
              CSScape the Room
            </li>
            <li>
              Created by James Sharpe
            </li>
          </ul>

          <ul className="my-links">
            <li>
              <a href="https://github.com/jmtsharpe/">
                Github
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jmtsharpe">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="http://www.jamesmtsharpe.com">
                More about James
              </a>
            </li>

          </ul>

        </header>
        <Prison />
      </div>
    );
  }
});

module.exports = App;
