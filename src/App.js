import React from 'react'
import List from './js/components/List'
import Form from './js/components/Form'
import Posts from './js/components/Posts'
import Update from './js/components/Update'
import Counter from './js/components/Counter'
import DashboardMenu from './js/components/DashboardMenu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
    <>
        <h2>Dashboard Menu</h2>
        <Router>
            <DashboardMenu />
            <Switch>
                <Route path="/addNewTodo" component={Form} />
                <Route path="/updateTodos" component={Update} />
                <Route path="/posts" component={Posts} />
            </Switch>
        </Router>
        <List />
        <Counter />
    </>
)

export default App
