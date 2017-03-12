import React from 'react'
import { shallow } from 'enzyme'

import TodoItem from '../TodoItem'

describe('TodoItem component', () => {
  test('default render', () => {
    const component = shallow(<TodoItem />)
    expect(component).toMatchSnapshot()
  })

  test('with title', () => {
    const component = shallow(<TodoItem title="Title" />)
    expect(component).toMatchSnapshot()
  })

  test('completed', () => {
    const component = shallow(<TodoItem completed />)
    expect(component).toMatchSnapshot()
  })

  test('onClick', () => {
    const clickHandler = jest.fn()

    const component = shallow(<TodoItem id={1} onClick={clickHandler} />)
    component.simulate('click')

    expect(clickHandler).toHaveBeenCalledWith(1)
  })
})
