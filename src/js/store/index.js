import { createStore } from 'redux'
import rootReducer from '../reducers/index'

/**
 * Creates the store from the root reducer and the createStore method
 */

const store = createStore(rootReducer)

export default store