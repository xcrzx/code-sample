import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from 'actions/todo'

class HomeContainer extends Component {
  static propTypes = {
    fetchTodos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>Hello!</div>
    )
  }
}

export default connect(
  state => state.todo,
  { fetchTodos },
)(HomeContainer)
