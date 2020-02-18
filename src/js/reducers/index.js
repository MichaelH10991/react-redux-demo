import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types'

/**
 * The root reducer is responsible for delegation of signals from the window obj
 */

const initialState = {
    articles: [],
    remoteArticles: []
}

/**
 * 
 * @param {Object} state 
 * @param {Object} action 
 */
function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ARTICLE:
            return { ...state, articles: state.articles.concat(action.payload) }
        case DATA_LOADED:
            return { ...state, remoteArticles: state.remoteArticles.concat(action.payload) }
        default:
            return state
    }
}


export default rootReducer