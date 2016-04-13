React = require('react');

var App = React.createClass({

  render: function () {
    return (
      <div>
        <header className="csscape-header">This is a header</header>
        {this.props.children}
      </div>
    );
  }



});

module.exports = App;
