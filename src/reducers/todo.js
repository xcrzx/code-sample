import { handleActions } from 'redux-actions'
import R from 'ramda'

import ActionTypes from 'constants/ActionTypes'
import { setIsFetching, unsetIsFetching, mergePayload } from './common'

export const defaultState = {
  isFetching: false,
  entities: {},
}

const todoReducer = handleActions({
  [ActionTypes.todo.fetch.request]: setIsFetching,
  [ActionTypes.todo.fetch.response]: {
    next: R.pipe(mergePayload, unsetIsFetching),
    throw: unsetIsFetching,
  },
}, defaultState)

export default todoReducer
