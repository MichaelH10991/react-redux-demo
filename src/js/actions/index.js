import { ADD_ARTICLE } from "../constants/action-types"

/**
 * This function is called from within the store.dispatch() method. The payload in this
 * instance would look something like {title: 'some title', id: 1}. It sends its object 
 * back to the window.addArticle object in src/js/index.js
 * @param {Object} payload 
 */
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload}
}

export function getData(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        return {type: 'DATA_LOADED', payload: json}
    })
}

