import { ADD_ARTICLE } from '../constants/action-types'

const forbiddenWords = ["spam", "money"]

/**
 * middleware that intercepts the creation of an article
 * it is instantiated in the store and is global
 * @param {function} param0 
 */
function forbiddenWordsMiddleware({ dispatch }) {
    return function(next){
        return function(action){
            if (action.type === ADD_ARTICLE){
                const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word))
                if (foundWord.length) return dispatch({ type: 'FOUND_BAD_WORD' })
            }
            return next(action)
        }
    }
}

export default forbiddenWordsMiddleware