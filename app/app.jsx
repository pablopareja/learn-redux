var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')
//
// ReactDOM.render(
//   <p>React Boilerplate 3</p>,
//   document.getElementById('app')
// );

// require('app/redux-example');
require('app/redux-todo-example');
