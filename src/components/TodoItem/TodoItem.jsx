import React, { PropTypes } from 'react'
import classnames from 'classnames'

import './TodoItem.scss'

const TodoItem = ({ title, completed, ...rest }) => (
  <div {...rest} className={classnames('todo-item', completed && 'completed')}>
    {title}
  </div>
)

TodoItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
}

export default TodoItem
