var React = require('react');
var PrisonDoor = require('./door');
var PrisonBed = require('./bed');
var PrisonLamp = require('./lamp');
var LightSwitch = require('./LightSwitch');
var CreepyEyes = require('./creepyEyes')

var Prison = React.createClass({

  getInitialState: function () {
    return ({ haveKey: false, haveLetter: false, letterOpen: false, doorOpen: false, lightsOn: true })
  },

  toggleLights: function () {
    this.setState({ lightsOn: !this.state.lightsOn });
  },

  render: function () {

    if (this.state.lightsOn) {
      return (
        <div className="prison-background">
          <PrisonLamp lightsOn={this.state.lightsOn}/>
          <div className="prison-wall">
            <div className="switch-box" onClick={this.toggleLights}>
              <div className="switch-toggle">
              </div>
            </div>

            <PrisonDoor />
          </div>
          <div className="prison-wall-sidecorner-left"></div>
          <div className="prison-wall-sidecorner-right"></div>
          <div className="prison-floor">
            <PrisonBed />
          </div>
        </div>
      );
    }


    return (
      <div className="prison-background">
        <CreepyEyes />
        <div className="darken-room">
          <p className="hidden-notes">C E G</p>  
        </div>
        <PrisonLamp lightsOn={this.state.lightsOn}/>
        <div className="prison-wall">
          <div className="switch-box-dark" onClick={this.toggleLights}>
            <div className="switch-toggle-dark">
            </div>
          </div>
          <PrisonDoor />
        </div>
        <div className="prison-wall-sidecorner-left"></div>
        <div className="prison-wall-sidecorner-right"></div>
        <div className="prison-floor">
          <PrisonBed />
        </div>
      </div>
    );

  }


});

module.exports = Prison;
