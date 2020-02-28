import React, { useState } from 'react'
import { connect } from 'react-redux'

function ConnectedCounter({ articles }) {
    /**
     * React hooks are named because they allow you to
     * “hook into” React state and lifecycle features
     * from function components
     */
    // using destructuring to set react hooks
    const [count, setCount] = useState(0)
    const [fruit, setFruit] = useState('bannana')
    const [todos, setTodos] = useState([{ text: 'Learn React Hooks' }])
    return (
        <div style={COUNTER_STYLE}>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
            <p>Your favourite fruit is {fruit}</p>
            {articles.length === 1 ? (
                <p>You have {articles.length} todo</p>
            ) : (
                <p>You have {articles.length} todos</p>
            )}
        </div>
    )
}

const COUNTER_STYLE = {
    flex: '1 1 0',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}

const mapStateToProps = state => {
    return { articles: state.articles }
}

const Counter = connect(mapStateToProps)(ConnectedCounter)

export default Counter
