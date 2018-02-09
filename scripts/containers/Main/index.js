import React from 'react'
import { hot } from 'react-hot-loader'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../../store/configureStore'

import App from '../../components/App'

const store = configureStore()

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default hot(module)(Main)
