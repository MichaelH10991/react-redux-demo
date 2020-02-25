import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import forbiddenWordsMiddleware from '../middleware'
import createSagaMiddleware from 'redux-saga'
import apiSaga from '../sagas/api-saga'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware()
/**
 * Creates the store from the root reducer and the createStore method
 */

const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware))
)

initialiseSagaMiddleware.run(apiSaga)

export default store