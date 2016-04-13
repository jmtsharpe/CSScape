React = require('react')

PrisonBed = React.createClass({

  getInitialState: function () {
    return({ sheetMoved: false });
  },

  moveSheets: function () {
    this.setState({ sheetMoved: !this.state.sheetMoved});
  },

  render: function () {

    if (!this.state.sheetMoved)
    return (
      <div className="prison-bed-div">
          <div className="head-board">
          </div>
          <div className="footer-legs"></div>
          <div className="top-covers"></div>
          <div className="foot-of-bed"></div>
          <div className="side-covers">
            <div className="bed-clicker" onClick={this.moveSheets}></div>
          </div>
      </div>
    );

    return (
      <div className="prison-bed-div">
          <div className="head-board">
          </div>
          <div className="footer-legs"></div>
          <div className="top-covers">
            <div className="moved-top-covers"></div>
          </div>
          <div className="foot-of-bed"></div>
          <div className="side-covers">
            <div className="moved-side-covers" onClick={this.moveSheets}></div>
          </div>

      </div>
    )
  }

});

module.exports = PrisonBed;
