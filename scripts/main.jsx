import React from 'react'
import { hot } from 'react-hot-loader'

import { Provider } from 'react-redux';

import configureStore from './store/configure_store';

import Routes from './components/Routes';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default hot(module)(App);
