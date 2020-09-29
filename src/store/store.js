import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import counter from './cartState.js';

import categorynav from './categoryState.js';

let reducers = combineReducers({ 
  counter,
  categorynav 
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();