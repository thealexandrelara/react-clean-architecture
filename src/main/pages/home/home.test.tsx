import React from 'react'
import {
  renderWithAllProviders,
  fireEvent,
} from 'utils/tests/react-testing-library'

import { Home } from './home'
import { useHomePage, UseHomePageState } from './useHomePage'

type CreateTodoContext = {
  input: HTMLElement
  submitButton: HTMLElement
  todoText: string
}

const createTodo = (context: CreateTodoContext) => {
  const { input, submitButton, todoText } = context

  fireEvent.change(input, { target: { value: todoText } })
  fireEvent.click(submitButton)
}

describe('Home component', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should contain an input', () => {
    const { getByPlaceholderText } = renderWithAllProviders(
      <Home />,
      null,
    )

    expect(
      getByPlaceholderText('Please, type your todo text here...'),
    ).toBeInTheDocument()
  })

  it('should contain an Add Todo button', () => {
    const { getByRole } = renderWithAllProviders(<Home />, null)

    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should not create todo with empty string', async () => {
    const {
      getByText,
      getByPlaceholderText,
      getByRole,
    } = renderWithAllProviders(<Home />, null)

    expect(getByText('0 tasks')).toBeInTheDocument()

    const input = getByPlaceholderText(
      'Please, type your todo text here...',
    )
    const submitButton = getByRole('button')
    createTodo({ input, submitButton, todoText: '' })

    expect(getByText('0 tasks')).toBeInTheDocument()
  })

  it('should correctly display number of todos/tasks when a new todo is added', async () => {
    const {
      getByText,
      getByPlaceholderText,
      getByRole,
    } = renderWithAllProviders(<Home />, null)

    expect(getByText('0 tasks')).toBeInTheDocument()

    const input = getByPlaceholderText(
      'Please, type your todo text here...',
    )
    const submitButton = getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_text' })

    expect(getByText('1 tasks')).toBeInTheDocument()
  })

  it('should reset input value to empty string after adding a new todo', async () => {
    const {
      getByText,
      getByPlaceholderText,
      getByRole,
    } = renderWithAllProviders(<Home />, null)

    const input = getByPlaceholderText(
      'Please, type your todo text here...',
    ) as HTMLInputElement
    const submitButton = getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_text' })

    expect(input.value).toEqual('')
  })

  it('should display all created todos', async () => {
    const {
      getByText,
      getByPlaceholderText,
      getByRole,
    } = renderWithAllProviders(<Home />, null)

    const input = getByPlaceholderText(
      'Please, type your todo text here...',
    ) as HTMLInputElement
    const submitButton = getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_todo1' })
    createTodo({ input, submitButton, todoText: 'any_todo2' })
    createTodo({ input, submitButton, todoText: 'any_todo3' })

    expect(getByText('any_todo1')).toBeInTheDocument()
    expect(getByText('any_todo2')).toBeInTheDocument()
    expect(getByText('any_todo3')).toBeInTheDocument()
  })
})
