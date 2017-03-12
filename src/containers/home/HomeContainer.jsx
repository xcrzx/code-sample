import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class HomeContainer extends Component {
  render() {
    return (
      <div>Hello!</div>
    )
  }
}

export default connect()(HomeContainer)
