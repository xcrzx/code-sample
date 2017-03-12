import { handleActions } from 'redux-actions'
import R from 'ramda'

import ActionTypes from 'constants/ActionTypes'

import { setIsFetching, unsetIsFetching, mergePayload } from './common'

export const defaultState = {
  isFetch: false,
  params: {},
}

const homeReducer = handleActions({
  [ActionTypes.home.request]: setIsFetching,
  [ActionTypes.home.response]: {
    next: R.pipe(mergePayload, unsetIsFetching),
    throw: unsetIsFetching,
  },
}, defaultState)

export default homeReducer
