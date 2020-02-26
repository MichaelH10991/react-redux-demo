import React, { useState } from 'react'
function Counter() {
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
            <input />
        </div>
    )
}

const COUNTER_STYLE = {
    flex: '1 1 0',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}

export default Counter
