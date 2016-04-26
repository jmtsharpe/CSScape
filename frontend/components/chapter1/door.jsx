React = require('react');
var Router = require('react-router').Router;

var PrisonDoor = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({ bar1: 0, bar2: 0, bar3: 0, doorOpen: false, tryDoor: false, tryDoorWKey: false})
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
    this.setState({ doorOpen: true })
  },

  tryDoor: function () {
    if (!this.props.haveKey) {
      this.setState({ tryDoor: !this.state.tryDoor });
    } else {
      this.setState({ tryDoorWKey: !this.state.tryDoorWKey });
    }
  },

  restart: function () {
    debugger
    this.context.router.push("/");
  },

  render: function () {

    var gameOver =
    <div className="game-over">
      <div className="end-game-message">
        <p>CONGRATULATIONS YOU ESCAPED THE ROOM...but now what?</p>
        <a href="http://www.csscape.io" className="restart-link" >Play again?</a>
    </div>
  </div>;

    if (this.state.tryDoor) {
      var tryDoor =
        <div className="door-modal" onClick={this.tryDoor}>
          <div className="door-fail-arrow"></div>
          <div className="door-fail-message">This door is locked</div>
        </div>;
    }

    if (this.state.tryDoorWKey) {
      debugger
      var tryDoorWKey =
        <div className="door-modal" onClick={this.tryDoor}>
          <div className="door-fail-arrow"></div>
          <div className="door-fail-message-wkey">This key doesn't work on this door</div>
        </div>;
    }

    if (this.state.doorOpen) {
      return (
        <div className="prison-door" onClick={this.tryDoor}>
          {gameOver}
          <div className="prison-door-opening">
            <div className="prison-door-window-open-bottom"></div>
            <div className="prison-door-window-open-top">
              <div className="bar-open bar-1-open"></div>
              <div className="bar-open bar-2-open"></div>
              <div className="bar-open bar-3-open"></div>
            </div>
          </div>
          <div className="door-handle-open" onClick={this.tryDoor}></div>
        </div>
      );
    }

    return (
      <div className="prison-door">
        {tryDoor}
        {tryDoorWKey}
        <div className="prison-door-window">
          <div className="bar bar-1" onClick={this.clickBar1}></div>
          <div className="bar bar-2" onClick={this.clickBar2}></div>
          <div className="bar bar-3" onClick={this.clickBar3}></div>
        </div>
        <div className="door-handle-div" onClick={this.tryDoor}>
          <div className="door-key-hole"></div>
          <div className="door-key-hole-bottom"></div>
          <div className="door-handle"></div>
        </div>
      </div>
    );

  }
});

module.exports = PrisonDoor;
