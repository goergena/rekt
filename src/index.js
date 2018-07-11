import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
import App from './App';
import './index.css';
import productsData from './data/products';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
});

let store = createStore(
  rootReducer,
  {
      products: productsData // initial store values
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

import Auth from './Auth/Auth.js'

const auth = new Auth();

let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(
    <App {...state} />,
    document.getElementById('root')
  );
}

/* eslint no-restricted-globals: 0*/
let initialState = {
  name: "Zach",
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth
}

window.setState(initialState);
