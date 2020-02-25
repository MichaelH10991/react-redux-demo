import {
    ADD_ARTICLE,
    DATA_REQUESTED,
    UPDATE_ARTICLE,
    DELETE_ARTICLE,
} from '../constants/action-types'

/**
 * This Action Creator function just returns a plain object it is called from within the store.dispatch() method. The payload in this
 * instance would look something like {title: 'some title', id: 1}. It sends its object
 * back to the window.addArticle object in src/js/index.js
 * @param {Object} payload
 */
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function getData() {
    return { type: DATA_REQUESTED }
}

// simply a function that returns the appropriate constant
export function updateArticle(payload) {
    return { type: UPDATE_ARTICLE, payload }
}

export function deleteArticle(payload) {
    return { type: DELETE_ARTICLE, payload }
}

/**
 * functions passed to the dispatch method e.g. dispatch(updateArticle(index))
 * can also create a Bound Action Creator e.g.const boundAddTodo = text => dispatch(addTodo(text)) which automatically dispatch
 * when they are called boundAddTodo(text)
 */
