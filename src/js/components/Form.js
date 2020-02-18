import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions/index'

/**
 * maps the react props to redux dispatch
 * @param {function} dispatch 
 */
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        const { title } = this.state
        // we can do this because of the connect()
        this.props.addArticle( {title} )
        this.setState( {title: ""} )
    }
    render(){
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
  * exposes the mapDispatchToProps dispatch to the ConnectedForm so we can use
  * props and redux in the form
  */
const Form = connect(
    null, 
    mapDispatchToProps
)(ConnectedForm)

export default Form