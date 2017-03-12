import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'

import { fetchTodos } from 'actions/todo'
import TodoItem from 'components/TodoItem/TodoItem'
import './HomeContainer.scss'

const showTodos = R.compose(R.values, R.map(TodoItem))

class HomeContainer extends Component {
  static propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    entities: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { entities } = this.props

    return (
      <div className="todo-container">
        <h1>Simple Todo List</h1>
        <div className="todo-list">
          {showTodos(entities)}
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.todo,
  { fetchTodos },
)(HomeContainer)
