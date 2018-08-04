import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import imagesReducer from './ducks/images.ducks'

const reducers = combineReducers({
  images: imagesReducer
})

const logger = createLogger({
  collapsed: true
})

const store = createStore(reducers, applyMiddleware(
  logger,
  thunk
))

export default store
