import { handleActions } from 'redux-actions'
import R from 'ramda'

import ActionTypes from 'constants/ActionTypes'
import { setIsFetching, unsetIsFetching, mergePayload } from './common'

export const defaultState = {
  isFetching: false,
  entities: {},
}

const toggleTodo = (todoId, todos) => R.over(R.lensPath([todoId, 'completed']), R.not, todos)

const todoReducer = handleActions({
  [ActionTypes.todo.toggle]: (state, { payload }) => ({ ...state, entities: toggleTodo(payload, state.entities) }),
  [ActionTypes.todo.fetch.request]: setIsFetching,
  [ActionTypes.todo.fetch.response]: {
    next: R.pipe(mergePayload, unsetIsFetching),
    throw: unsetIsFetching,
  },
}, defaultState)

export default todoReducer
