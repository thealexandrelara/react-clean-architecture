import React from 'react'
import { render } from '@testing-library/react'

import { Home } from './home'
import { useHomePage, UseHomePageState } from './useHomePage'

jest.mock('./useHomePage', () => ({
  useHomePage: jest.fn(() => ({
    todos: [],
  })),
}))

describe('Home component', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should contain an input', () => {
    const { getByPlaceholderText } = render(<Home />)

    expect(
      getByPlaceholderText('Please, type your todo text here...'),
    ).toBeInTheDocument()
  })

  it('should contain an Add Todo button', () => {
    const { getByRole } = render(<Home />)

    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should correctly display number of todos/tasks', async () => {
    useHomePage.mockImplementationOnce(() => ({
      todos: [1, 2, 3],
    }))
    const { getByText } = render(<Home />)

    expect(getByText('3 tasks')).toBeInTheDocument()
  })
})
