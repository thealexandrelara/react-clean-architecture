import React from 'react'
import {
  renderWithAllProviders,
  screen,
} from 'utils/tests/react-testing-library'

import { TodoItem } from './todo-item'

const makeTodo = () => ({
  id: 'any_id',
  text: 'any_text',
  isCompleted: false,
})

describe('Todo Item', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should display a checkbox', () => {
    const todo = makeTodo()
    renderWithAllProviders(<TodoItem todo={todo} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('should not set checkbox to checked if todo is not completed', () => {
    const todo = {
      id: 'any_id',
      text: '',
      isCompleted: false,
    }
    renderWithAllProviders(<TodoItem todo={todo} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it('should set checkbox to checked if todo is completed', () => {
    const todo = {
      id: 'any_id',
      text: 'any_text',
      isCompleted: true,
    }
    renderWithAllProviders(<TodoItem todo={todo} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
  })
})
