import React from 'react'
import List from './List'
import Form from './Form'
import Posts from './Posts'
import Update from './Update'

const App = () => (
    <>
        <div>
            <h2>Articles</h2>
            <List />
        </div>
        <div>
            <h2>Add a new Article</h2>
            <Form />
        </div>
        <div>
            <h2>Update Article</h2>
            <Update />
        </div>
        <div>
            <h2>API Posts</h2>
            <Posts />
        </div>
    </>
)

export default App
