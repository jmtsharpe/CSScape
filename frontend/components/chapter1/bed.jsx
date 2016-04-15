React = require('react')

PrisonBed = React.createClass({

  getInitialState: function () {
    return({ sheetMoved: this.props.sheetMoved });
  },

  render: function () {

    if (!this.props.sheetMoved) {
      return (
        <div className="prison-bed-div">
            <div className="head-board">
            </div>
            <div className="side-covers-right"></div>
            <div className="footer-legs"></div>
            <div className="bed-side"></div>
            <div className="bed-top"></div>
            <div className="foot-of-bed"></div>
            <div className="top-covers"></div>
            <div className="side-covers">
            </div>
        </div>
      );
    }

    return (
      <div className="prison-bed-div">
          <div className="head-board">
          </div>
          <div className="side-covers-right-moved"></div>
          <div className="footer-legs"></div>
          <div className="bed-side"></div>
          <div className="bed-top"></div>
          <div className="foot-of-bed"></div>
          <div className="top-covers-moved"></div>
          <div className="side-covers-moved"></div>

      </div>
    )
  }

});

module.exports = PrisonBed;
