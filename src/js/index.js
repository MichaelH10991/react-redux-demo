import store from "../js/store/index"
import { addArticle } from "../js/actions/index"

/**
 * This is the root for redux and it brings in store and 
 * addArticle and makes them available to the window object 
 * by adding them as properties to the window object.
 */

// using store.getState() will return the store's state
// use store.subscribe(() => {some_code}) to execute code on event
window.store = store
// using store.dispatch(addArticle({Object})) will add an article to the state
window.addArticle = addArticle
