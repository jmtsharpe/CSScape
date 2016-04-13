var React = require('react');
var ReactDOM = require('react-dom');
var History = require('react-router').History;
var hashHistory = require('react-router').hashHistory;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Chapter1 = require('./components/chapter1/prison');
var App = require('./components/app/app');

var routes = (
  <Route path="/" component={App}>
    <Route path="/api/chapter1" component={Chapter1} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  ReactDOM.render(
    <div>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/api/chapter1" component={Chapter1} />
        </Route>
      </Router>
    </div>,
    document.getElementById('root')
  );
});
