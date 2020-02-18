import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import forbiddenWordsMiddleware from '../middleware'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.compose;

/**
 * Creates the store from the root reducer and the createStore method
 */

const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
)

export default store