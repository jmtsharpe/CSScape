React = require('react');
PrisonDoor = require('./door');
PrisonBed = require('./bed');
PrisonLamp = require('./lamp')

var Prison = React.createClass({

  getInitialState: function () {
    return ({ haveKey: false, haveLetter: false, letterOpen: false, doorOpen: false})
  },

  openDoor: function () {
    this.setState({ doorOpen: true});
  },

  render: function () {



    return (

      <div className="prison-background">
        <PrisonLamp />
        <div className="prison-wall">
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
