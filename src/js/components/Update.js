import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateArticle, deleteArticle } from '../actions/index'

class ConnectedUpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            updateId: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleInputChange(event) {
        return event.target.id === 'title'
            ? this.setState({ title: event.target.value })
            : this.setState({ updateId: event.target.value })
    }
    handleUpdate(event) {
        event.preventDefault()
        const { title, updateId } = this.state
        this.props.updateArticle({ title, updateId })
        this.setState({ title: '', updateId: '' })
    }
    handleDelete(event) {
        event.preventDefault()
        const { updateId } = this.state
        this.props.deleteArticle({ updateId })
        this.setState({ updateId: '' })
    }
    render() {
        const { title, updateId } = this.state
        return (
            <>
                <form onSubmit={this.handleUpdate}>
                    <div>
                        <div>
                            <label htmlFor="updateId">id</label>
                            <input
                                type="text"
                                id="updateId"
                                value={updateId}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <label htmlFor="title">New Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" id="save">
                        SAVE
                    </button>
                </form>

                <form onSubmit={this.handleDelete}>
                    <div>
                        <label htmlFor="title">id</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" id="delete">
                        DELETE
                    </button>
                </form>
            </>
        )
    }
}

/**
 * maps the react props to redux dispatch
 * @param {function} dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        updateArticle: article => dispatch(updateArticle(article)),
        deleteArticle: article => dispatch(deleteArticle(article)),
    }
}

/**
 * exposes the mapDispatchToProps dispatch to the ConnectedForm so we can use
 * props and redux in the form.
 */
const Form = connect(null, mapDispatchToProps)(ConnectedUpdateForm)

export default Form
