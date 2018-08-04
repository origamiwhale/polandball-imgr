import { createStore, combineReducers } from 'redux'

import imagesReducer from './ducks/images.ducks'

const reducers = combineReducers({
  images: imagesReducer
})

const store = createStore(reducers)

export default store
