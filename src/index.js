import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';
import { setCurrentList } from './actions/setList';


const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

const testArray = ['bowling', 'basketball', 'softball'];

store.dispatch(setCurrentList(testArray));


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
