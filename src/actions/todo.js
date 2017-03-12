import { createAction } from 'redux-actions'
import R from 'ramda'

import ActionTypes from 'constants/ActionTypes'
import api from 'api/api'

export const toggleTodo = createAction(ActionTypes.todo.toggle)

export const fetchTodosRequest = createAction(ActionTypes.todo.fetch.request)

export const fetchTodosResponse = createAction(ActionTypes.todo.fetch.response)

export const fetchTodos = () => (dispatch) => {
  dispatch(fetchTodosRequest())

  return api.getTodos()
    .then(R.pipe(R.prop('data'), fetchTodosResponse, dispatch))
    .catch(R.pipe(R.path(['error', 'message']), R.construct(Error), fetchTodosResponse, dispatch))
}
