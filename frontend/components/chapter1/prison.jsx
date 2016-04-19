var React = require('react');
var PrisonDoor = require('./door');
var PrisonBed = require('./bed');
var PrisonLamp = require('./lamp');
var LightSwitch = require('./LightSwitch');
var CreepyEyes = require('./creepyEyes')
var Poster = require('./poster');
var Intro = require('./../app/intro');

var Prison = React.createClass({

  getInitialState: function () {
    return ({
      haveKey: false,
      haveLetter: false,
      letterOpen: false,
      doorOpen: false,
      doorAttemptWKey: false,
      doorAttemptNoKey: false,
      lightsOn: true,
      sheetMoved: false,
      posterPeeled: false,
      safeOpen: false,
      safeAttempt: false,
      intro: true
    });
  },

  openLetter: function () {
    this.setState({ letterOpen: !this.state.letterOpen })
  },

  getKey: function () {
    debugger
    this.setState({ haveKey: true });
  },

  toggleLights: function () {
    this.setState({ lightsOn: !this.state.lightsOn });
  },

  moveSheets: function () {
    this.setState({ sheetMoved: !this.state.sheetMoved });
  },

  peelPoster: function () {
    this.setState({ posterPeeled: true })
  },

  openSafe: function () {
    if (this.state.haveKey) {
      this.setState({ safeOpen: true})
    } else {
      this.setState({ safeAttempt: !this.state.safeAttempt })
    }
  },

  exitIntro: function () {
    this.setState({ intro: false });
  },



  render: function () {

    if (this.state.safeAttempt) {
      var safeModal =
        <div className="safe-modal" onClick={this.openSafe}>
          <div className="safe-fail-arrow"></div>
          <div className="safe-fail-message">It's locked!</div>
        </div>
    }

    if (!this.state.haveKey) {
      var key =
          <div className="key-div" onClick={this.getKey}>
            <div className="key-head"></div>
            <div className="key-shaft"></div>
            <div className="key-teeth"></div>
          </div>;
    }

    if (this.state.posterPeeled && !this.state.safeOpen) {
      var safeLock = <div className="safe-lock" onClick={this.openSafe}></div>
    }

    if (this.state.safeOpen) {
      var letterClicker = <div className="letter-clicker" onClick={this.openLetter}></div>
    }

    if (!this.state.posterPeeled) {
      var posterClicker = <div className="poster-clicker" onClick={this.peelPoster} />;
    }

    if (this.state.letterOpen) {
      var openLetter =
      <div className="open-letter" onClick={this.openLetter}>
        <div className="music-staffs">
          <div className="music-staff-1">
            <div className="g-note-1 note"></div>
            <div className="g-note-2 note"></div>
          </div>

          <div className="music-staff-2">
            <div className="e-note-1 note"></div>
            <div className="e-note-2 note"></div>
          </div>
          <div className="music-staff-3">
            <div className="c-note-1 note"></div>
            <div className="c-note-2 note"></div>
          </div>
          <div className="music-staff-4"></div>
          <h2>THIS SONG WILL SET YOU FREE</h2>
          <h3>play a bar</h3>
        </div>
      </div>
    }

    if (this.state.intro) {
      return (
        <div className="prison-background">
          <div className="intro-div" onClick={this.exitIntro} >
            <Intro  />
          </div>
          <PrisonLamp lightsOn={this.state.lightsOn}/>
          <Poster peeled={this.state.posterPeeled} safeOpen={this.state.safeOpen}/>
          <div className="prison-wall">
            <div className="switch-box" onClick={this.toggleLights}>
              <div className="switch-toggle">
              </div>
            </div>

            <PrisonDoor haveKey={this.state.haveKey} />
          </div>
          <div className="prison-wall-sidecorner-left"></div>
          <div className="prison-wall-sidecorner-right"></div>
          <div className="prison-floor">
            <PrisonBed  sheetMoved={this.state.sheetMoved} />
          </div>
        </div>
      );
    }

    if (this.state.lightsOn) {
      return (
        <div className="prison-background">
          {safeModal}
          <PrisonLamp lightsOn={this.state.lightsOn}/>
          <Poster peeled={this.state.posterPeeled} safeOpen={this.state.safeOpen}/>
          {posterClicker}
          {safeLock}
          {letterClicker}
          {openLetter}
          <div className="prison-wall">
            <div className="switch-box" onClick={this.toggleLights}>
              <div className="switch-toggle">
              </div>
            </div>

            <PrisonDoor haveKey={this.state.haveKey} />
          </div>
          <div className="prison-wall-sidecorner-left"></div>
          <div className="prison-wall-sidecorner-right"></div>
          <div className="prison-floor">
            <PrisonBed  sheetMoved={this.state.sheetMoved} />
            {key}
            <div className="bed-clicker" onClick={this.moveSheets} />
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
        <Poster peeled={this.state.posterPeeled} safeOpen={this.state.safeOpen}/>
          {posterClicker}
          {safeLock}
          {letterClicker}
          {openLetter}
        <div className="prison-wall">
          <div className="switch-box-dark" onClick={this.toggleLights}>
            <div className="switch-toggle-dark">
            </div>
          </div>
          <PrisonDoor haveKey={this.state.haveKey} />
        </div>
        <div className="prison-wall-sidecorner-left"></div>
        <div className="prison-wall-sidecorner-right"></div>
        <div className="prison-floor">
          <PrisonBed sheetMoved={this.state.sheetMoved} />
          <key />
          <div className="bed-clicker" onClick={this.moveSheets} />
        </div>
      </div>
    );

  }


});

module.exports = Prison;
