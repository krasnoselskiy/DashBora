import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

export default function configureStore(initialState = {}) {
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error
  });
  const middlewares = [ReduxThunk, logger]
  const enhancers = [
    applyMiddleware(...middlewares),
  ]
  const composeEnhancers = composeWithDevTools({
  })
  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers))
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
