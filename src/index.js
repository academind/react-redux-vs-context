import React from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import App from './App';
import shopReducer from './store/reducers';

const store = legacy_createStore(shopReducer, applyMiddleware(reduxThunk));

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
