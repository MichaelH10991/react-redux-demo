import {
    ADD_ARTICLE,
    UPDATE_ARTICLE,
    DATA_LOADED,
    API_ERRORED,
    DELETE_ARTICLE,
} from '../constants/action-types'

/**
 * The root reducer is responsible for delegation of signals from the window obj
 *
 * Reducers specify how the application's state changes in response to actions
 * sent to the store. Remember that actions only describe what happened, but
 * don't describe how the application's state changes.
 */

const initialState = {
    articles: [],
    remoteArticles: [],
    errors: [],
}

/**
 *
 * @param {Object} state
 * @param {Object} action
 */
function rootReducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case ADD_ARTICLE:
            newState.articles = newState.articles.concat(action.payload)
            return newState
        case UPDATE_ARTICLE:
            newState.articles = newState.articles.map(article => {
                if (article.id === action.payload.updateId) {
                    return {
                        ...article,
                        id: article.id,
                        title: action.payload.title,
                    }
                }
                return article
            })
            return newState
        case DATA_LOADED:
            return {
                ...state,
                remoteArticles: state.remoteArticles.concat(action.payload),
            }
        case API_ERRORED:
            return { ...state, error: state.errors.concat(action.payload) }
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(
                    article => article.id !== action.payload.updateId
                ),
            }
        default:
            return state
    }
}

export default rootReducer
