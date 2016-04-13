React = require('react');

var PrisonDoor = React.createClass({

  getInitialState: function () {
    return ({ bar1: 0, bar2: 0, bar3: 0, doorOpen: false})
  },

  clickBar1: function () {
    if ( this.state.bar3 === 1 && this.state.bar2 === 0) {
      this.setState({ bar1: 1 });
    } else if (this.state.bar3 === 2 && this.state.bar2 === 1) {
      this.setState({ bar1: 2} );
    } else {
      this.setState({ bar1: 0, bar2: 0, bar3: 0 });
    }
  },

  clickBar2: function () {
    if ( this.state.bar3 === 1 && this.state.bar1 === 1) {
      this.setState({ bar2: 1 });
    } else if (this.state.bar3 === 2 && this.state.bar1 === 2) {
      this.openDoor();
    } else {
      this.setState({ bar1: 0, bar2: 0, bar3: 0 });
    }
  },

  clickBar3: function () {
    if ( this.state.bar1 === 0 && this.state.bar2 === 0) {
      this.setState({ bar3: 1 });
    } else if (this.state.bar1 === 1 && this.state.bar2 === 1) {
      this.setState({ bar3: 2} );
    } else {
      this.setState({ bar1: 0, bar2: 0, bar3: 0 });
    }
  },

  openDoor: function () {
    this.setState({ doorOpen: !this.state.doorOpen});
  },

  render: function () {

    if (this.state.doorOpen) {
      return (
        <div className="prison-door" onClick={this.openDoor}>
          <div className="prison-door-opening">
            <div className="prison-door-window-open-bottom"></div>
            <div className="prison-door-window-open-top">
              <div className="bar-open bar-1-open"></div>
              <div className="bar-open bar-2-open"></div>
              <div className="bar-open bar-3-open"></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="prison-door">
        <div className="prison-door-window">
          <div className="bar bar-1" onClick={this.clickBar1}></div>
          <div className="bar bar-2" onClick={this.clickBar2}></div>
          <div className="bar bar-3" onClick={this.clickBar3}></div>
        </div>
      </div>
    );

  }
});

module.exports = PrisonDoor;
