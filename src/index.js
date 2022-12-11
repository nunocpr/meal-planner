import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router/Router';
import store from './store/store';
import { Provider } from 'react-redux';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);