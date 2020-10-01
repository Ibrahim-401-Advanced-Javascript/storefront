import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import counter from './cartState.js';

import categorynav from './categoryState.js';

let reducers = combineReducers({ 
  counter,
  categorynav 
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();