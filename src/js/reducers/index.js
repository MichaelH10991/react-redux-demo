import { ADD_ARTICLE } from '../constants/action-types'

/**
 * The root reducer is responsible for delegation of signals from the window obj
 */

const initialState = {
    articles: []
}

/**
 * 
 * @param {Object} state 
 * @param {Object} action 
 */
function rootReducer(state = initialState, action) {
    if(action.type === ADD_ARTICLE) {
        return {...state, articles: state.articles.concat(action.payload) }
    }
    return state
}


export default rootReducer