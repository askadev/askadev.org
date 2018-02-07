import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers/"
import logger from "redux-logger"

// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(initialState) {
  if (NODE_ENV === "development") {
    return createStoreWithMiddleware(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  } else {
    return createStoreWithMiddleware(rootReducer, initialState)
  }
}
