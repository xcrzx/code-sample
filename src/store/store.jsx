import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from 'reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('reducers', () => {
    const nextRootReducer = require('reducers').default // eslint-disable-line global-require
    store.replaceReducer(nextRootReducer)
  })
}

export default store
