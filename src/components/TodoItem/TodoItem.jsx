import React, { PropTypes } from 'react'
import classnames from 'classnames'

import './TodoItem.scss'

const TodoItem = ({ id, title, completed, onClick, ...rest }) => (
  <div {...rest} className={classnames('todo-item', completed && 'completed')} onClick={() => onClick(id)}>
    {title}
  </div>
)

TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
}

export default TodoItem
