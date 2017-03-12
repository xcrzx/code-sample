import {
  toggleTodo,
  fetchTodosRequest,
  fetchTodosResponse,
} from 'actions/todo'
import reducer, { defaultState } from 'reducers/todo'

const sampleResponse = {
  entities: {
    0: {
      completed: true,
    },
  },
}

describe('Todo reducer', () => {
  it('Handles all actions', () => {
    expect(reducer(defaultState, fetchTodosRequest())).toMatchSnapshot()
    expect(reducer(defaultState, fetchTodosResponse(sampleResponse))).toMatchSnapshot()
    expect(reducer(defaultState, fetchTodosResponse(Error('error')))).toMatchSnapshot()

    expect(reducer(sampleResponse, toggleTodo(0))).toMatchSnapshot()
  })
})
