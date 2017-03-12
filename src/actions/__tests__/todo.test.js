import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import api from 'api/api'
import { fetchTodos, toggleTodo } from 'actions/todo'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Todo actions', () => {
  test('fetchTodos success', () => {
    api.getTodos = jest.fn(() => Promise.resolve({ data: { entities: {} } }))

    const store = mockStore({ todo: {} })

    return store.dispatch(fetchTodos())
      .then(() => expect(store.getActions()).toMatchSnapshot())
  })

  test('fetchTodos error', () => {
    api.getTodos = jest.fn(() => Promise.reject('Something went wrong'))

    const store = mockStore({ todo: {} })

    return store.dispatch(fetchTodos())
      .then(() => expect(store.getActions()).toMatchSnapshot())
  })

  test('toggleTodo', () => {
    const store = mockStore({ todo: {} })

    store.dispatch(toggleTodo(0))
    expect(store.getActions()).toMatchSnapshot()
  })
})
