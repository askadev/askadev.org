import React from "react"
import { hot } from "react-hot-loader"

import { Provider } from "react-redux"

import configureStore from "../../store/configureStore"
import Home from "../../pages/home"

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default hot(module)(App)
