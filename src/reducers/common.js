import R from 'ramda'

const fetchingLens = R.lensProp('isFetching')

export const setIsFetching = R.set(fetchingLens, true)

export const unsetIsFetching = R.set(fetchingLens, false)

export const mergePayload = R.useWith(R.merge, [R.identity, R.prop('payload')])

export const assignPayloadTo = key => R.useWith(R.merge, [
  R.identity,
  R.compose(R.objOf(key), R.prop('payload')),
])
