import React from 'react'
import List from './List'
import Form from './Form'
import Posts from './Posts'
import Update from './Update'
import Counter from './Counter'
import DashboardMenu from './Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
    <>
        <h2>Dashboard Menu</h2>

        <Router>
            <DashboardMenu />
            <Switch>
                <Route path="/todos" component={List} />
                <Route path="/addNewTodo" component={Form} />
                <Route path="/updateTodos" component={Update} />
                <Route path="/posts" component={Posts} />
            </Switch>
        </Router>
    </>
)

export default App
