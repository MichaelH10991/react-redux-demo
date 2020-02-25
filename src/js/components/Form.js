import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions/index'
import { uuid } from 'uuidv4'

class ConnectedForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // sets the title obj in state so we can use pull it out in const { title } = this.state
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        const { title } = this.state
        const id = uuid()
        /**
         * we can do this because of the connect() method which maps react props obj to redux store and actions.
         * connect() turns this.props.addArticle() into dispatch(addArticle(article))
         * */

        this.props.addArticle({ id, title })
        this.setState({ id: '', title: '' })
    }
    render() {
        const { title } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">SAVE</button>
            </form>
        )
    }
}

/**
 * maps the react props to redux dispatch
 * @param {function} dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
    }
}

/**
 * exposes the mapDispatchToProps dispatch to the ConnectedForm so we can use
 * props and redux in the form.
 */
const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form
