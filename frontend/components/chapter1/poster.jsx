React = require('react');
Safe = require('./safe');

Poster = React.createClass({


  render: function () {

    if (!this.props.peeled) {
      return (
        <div>
          <div className="poster-marker">:)</div>
          <div className="poster-div-top" >
          </div>
          <div className="poster-div">
            <div className="poster-person-head"></div>
            <div className="poster-person-finger"></div>
            <div className="poster-person-hand"></div>
            <div className="poster-person-arm"></div>
            <div className="poster-person-body"></div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="poster-div-top" ></div>
        <div className="poster-div">
          <div className="poster-person-head"></div>
          <div className="poster-person-finger"></div>
          <div className="poster-person-hand"></div>
          <div className="poster-person-arm"></div>
          <div className="poster-person-body"></div>
        </div>
        <div className="poster-corner-peeled"></div>
    
        <Safe safeOpen={this.props.safeOpen} />

        <div className="poster-corner-peeled-overlay-new"></div>
      </div>
    );
  }


});

module.exports = Poster;
