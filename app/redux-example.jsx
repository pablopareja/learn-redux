var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url){
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
  }
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Pablo'));

store.dispatch(actions.addHobby('Singing'));

store.dispatch(actions.addHobby('Swimming'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Finding Nemo', 'Comedy'));

store.dispatch(actions.removeMovie(1));

store.dispatch(actions.changeName('Paco'));
