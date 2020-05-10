import React from 'react'
import {
  renderWithAllProviders,
  screen,
  fireEvent,
} from 'utils/tests/react-testing-library'
import { v4 } from 'uuid'

import { Home } from './home'
import { mocked } from 'ts-jest/utils'

jest.mock('uuid')

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
  beforeAll(() => {
    v4.mockReturnValue('any_id')
  })

  beforeEach(() => {
    jest.resetModules()
  })

  it('should contain an input after creating new todo', () => {
    renderWithAllProviders(<Home />)

    const createTodoButton = screen.getByRole('button')
    fireEvent.click(createTodoButton)

    expect(
      screen.getByPlaceholderText('Type your todo text here...'),
    ).toBeInTheDocument()
  })

  it('should contain an Create Todo button', () => {
    renderWithAllProviders(<Home />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should create todo with empty string', async () => {
    renderWithAllProviders(<Home />)

    expect(screen.getByText('0 tasks')).toBeInTheDocument()

    const createTodoButton = screen.getByRole('button')
    fireEvent.click(createTodoButton)
    const input = screen.getByPlaceholderText(
      'Type your todo text here...',
    )
    expect(input.value).toEqual('')
  })

  it('should correctly display number of todos/tasks when a new todo is added', async () => {
    renderWithAllProviders(<Home />)

    expect(screen.getByText('0 tasks')).toBeInTheDocument()

    const createTodoButton = screen.getByRole('button')
    fireEvent.click(createTodoButton)

    expect(screen.getByText('1 tasks')).toBeInTheDocument()
  })

  it('should display all created todos', () => {
    renderWithAllProviders(<Home />)

    const createTodoButton = screen.getByRole('button')
    mocked(v4).mockReturnValueOnce('any_id')
    fireEvent.click(createTodoButton)
    mocked(v4).mockReturnValueOnce('any_id2')
    fireEvent.click(createTodoButton)
    mocked(v4).mockReturnValueOnce('any_id3')
    fireEvent.click(createTodoButton)

    expect(screen.getAllByRole('checkbox')).toHaveLength(3)
  })

  it('should not toggle todo when user clicks on checkbox and todo text is empty', () => {
    renderWithAllProviders(<Home />)

    const createTodoButton = screen.getByRole('button')
    fireEvent.click(createTodoButton)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)

    expect(checkbox).not.toBeChecked()
  })

  it('should toggle todo when user clicks on checkbox and todo text is not empty', () => {
    renderWithAllProviders(<Home />)

    const createTodoButton = screen.getByRole('button')
    fireEvent.click(createTodoButton)

    const input = screen.getByPlaceholderText(
      /type your todo text here.../i,
    )
    fireEvent.change(input, { target: { value: 'any_todo' } })

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('should delete todo when delete button is clicked', () => {
    renderWithAllProviders(<Home />)

    const createTodoButton = screen.getByRole('button')
    fireEvent.click(createTodoButton)

    const deleteTodoButton = screen.getByTestId(
      'delete-button-any_id',
    )
    expect(deleteTodoButton).toBeInTheDocument()

    fireEvent.click(deleteTodoButton)

    expect(deleteTodoButton).not.toBeInTheDocument()
  })

  it('should contain an page title with correct text', () => {
    renderWithAllProviders(<Home />)

    const pageTitle = screen.getByText(/clean todo/gi)
    expect(pageTitle).toBeInTheDocument()
  })

  it('should correctly display formatted day on the page', () => {
    renderWithAllProviders(<Home />)
    expect(screen.getByText(/thursday, 10th/i)).toBeInTheDocument()
  })

  it('should correctly display formatted month on the page', () => {
    renderWithAllProviders(<Home />)
    expect(screen.getByText(/december/i)).toBeInTheDocument()
  })

  it('should edit todo when user hits Enter', () => {
    renderWithAllProviders(<Home />)

    const createTodoButton = screen.getByRole('button')
    fireEvent.click(createTodoButton)

    const input = screen.getByPlaceholderText(
      /type your todo text here.../i,
    )
    fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
    fireEvent.keyDown(input, { key: 'B', code: 'KeyB' })
    fireEvent.keyDown(input, { key: 'C', code: 'KeyC' })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    fireEvent.change(input, { target: { value: 'ABC' } })

    expect(input.value).toEqual('ABC')
  })
})
