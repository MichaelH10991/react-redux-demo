import React from 'react'
import { connect } from 'react-redux'

const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
)

/**
 * The List component receives the prop articles which is a copy of the articles array we saw in the Redux state. It comes from the reducer
 * @param {*} state 
 */

const mapStateToProps = state => {
    return { articles: state.articles }
}

const list = connect(mapStateToProps)(ConnectedList)

export default list