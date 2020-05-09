import React from 'react'
import {
  renderWithAllProviders,
  screen,
  fireEvent,
} from 'utils/tests/react-testing-library'

import { Home } from './home'

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
    renderWithAllProviders(<Home />)

    expect(
      screen.getByPlaceholderText(
        'Please, type your todo text here...',
      ),
    ).toBeInTheDocument()
  })

  it('should contain an Add Todo button', () => {
    renderWithAllProviders(<Home />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should not create todo with empty string', async () => {
    renderWithAllProviders(<Home />)

    expect(screen.getByText('0 tasks')).toBeInTheDocument()

    const input = screen.getByPlaceholderText(
      'Please, type your todo text here...',
    )
    const submitButton = screen.getByRole('button')
    createTodo({ input, submitButton, todoText: '' })

    expect(screen.getByText('0 tasks')).toBeInTheDocument()
  })

  it('should correctly display number of todos/tasks when a new todo is added', async () => {
    renderWithAllProviders(<Home />)

    expect(screen.getByText('0 tasks')).toBeInTheDocument()

    const input = screen.getByPlaceholderText(
      'Please, type your todo text here...',
    )
    const submitButton = screen.getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_text' })

    expect(screen.getByText('1 tasks')).toBeInTheDocument()
  })

  it('should reset input value to empty string after adding a new todo', async () => {
    renderWithAllProviders(<Home />)

    const input = screen.getByPlaceholderText(
      'Please, type your todo text here...',
    ) as HTMLInputElement
    const submitButton = screen.getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_text' })

    expect(input.value).toEqual('')
  })

  it('should display all created todos', () => {
    renderWithAllProviders(<Home />)

    const input = screen.getByPlaceholderText(
      'Please, type your todo text here...',
    ) as HTMLInputElement
    const submitButton = screen.getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_todo1' })
    createTodo({ input, submitButton, todoText: 'any_todo2' })
    createTodo({ input, submitButton, todoText: 'any_todo3' })

    expect(screen.getByText('any_todo1')).toBeInTheDocument()
    expect(screen.getByText('any_todo2')).toBeInTheDocument()
    expect(screen.getByText('any_todo3')).toBeInTheDocument()
  })

  it('should toggle todo when user clicks on checkbox', () => {
    renderWithAllProviders(<Home />)

    const input = screen.getByPlaceholderText(
      'Please, type your todo text here...',
    ) as HTMLInputElement
    const submitButton = screen.getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_todo1' })

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('should toggle todo when user clicks on todo text', () => {
    renderWithAllProviders(<Home />)

    const input = screen.getByPlaceholderText(
      'Please, type your todo text here...',
    ) as HTMLInputElement
    const submitButton = screen.getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_todo1' })

    const todoText = screen.getByTestId('todo-text-any_todo1')
    expect(todoText).toBeInTheDocument()
    fireEvent.click(todoText)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
  })

  it('should delete todo when delete button is clicked', () => {
    renderWithAllProviders(<Home />)

    const input = screen.getByPlaceholderText(
      'Please, type your todo text here...',
    ) as HTMLInputElement
    const submitButton = screen.getByRole('button')
    createTodo({ input, submitButton, todoText: 'any_text' })

    expect(
      screen.getByTestId('delete-button-any_text'),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('delete-button-any_text'))

    expect(screen.queryByText('any_text')).not.toBeInTheDocument()
  })

  it('should contain an page title with correct text', () => {
    renderWithAllProviders(<Home />)

    const pageTitle = screen.queryByText(/clean todo/gi)
    expect(pageTitle).toBeInTheDocument()
  })
})
