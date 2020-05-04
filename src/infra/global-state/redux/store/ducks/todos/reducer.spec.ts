import { reducer, initialState } from './reducer'
import {
  createTodo,
  editTodo,
  removeTodo,
  toggleTodoCompletedStatus,
} from './actions'

describe('Todos reducer', () => {
  it('should correctly add todo to reducer state when create todo action is passed', () => {
    const createTodoAction = createTodo({
      id: 'any_id',
      text: 'any_text',
      isCompleted: false,
    })
    expect(reducer(initialState, createTodoAction)).toEqual({
      data: [{ id: 'any_id', text: 'any_text', isCompleted: false }],
    })
  })

  it('should correctly remove todo in reducer state when remove todo action is passed', () => {
    const currentState = {
      ...initialState,
      data: [
        {
          id: 'any_id',
          text: 'any_text',
          isCompleted: false,
        },
      ],
    }
    const removeTodoAction = removeTodo('any_id')
    expect(reducer(currentState, removeTodoAction)).toEqual({
      data: [],
    })
  })

  it('should correctly update todo in reducer state when update todo action is passed', () => {
    const currentState = {
      ...initialState,
      data: [
        {
          id: 'any_id',
          text: 'any_text',
          isCompleted: false,
        },
      ],
    }
    const editTodoAction = editTodo('any_id', {
      text: 'another_text',
    })
    expect(reducer(currentState, editTodoAction)).toEqual({
      data: [
        { id: 'any_id', text: 'another_text', isCompleted: false },
      ],
    })
  })

  it('should not update state when provided id in update todo action does not have corresponding todo', () => {
    const currentState = {
      ...initialState,
      data: [
        {
          id: 'any_id',
          text: 'any_text',
          isCompleted: false,
        },
      ],
    }
    const editTodoAction = editTodo('invalid_id', {
      text: 'another_text',
    })
    expect(reducer(currentState, editTodoAction)).toEqual({
      data: [{ id: 'any_id', text: 'any_text', isCompleted: false }],
    })
  })

  it('should correctly toggle todo status in reducer state when toggle todo status action is passed', () => {
    const currentState = {
      ...initialState,
      data: [
        {
          id: 'any_id',
          text: 'any_text',
          isCompleted: false,
        },
      ],
    }
    const toggleTodoCompletedStatusAction = toggleTodoCompletedStatus(
      'any_id',
    )
    expect(
      reducer(currentState, toggleTodoCompletedStatusAction),
    ).toEqual({
      data: [
        {
          id: 'any_id',
          text: 'any_text',
          isCompleted: true,
        },
      ],
    })
  })

  it('should not update state when provided id in toggle todo completed status action does not have corresponding todo', () => {
    const currentState = {
      ...initialState,
      data: [
        {
          id: 'any_id',
          text: 'any_text',
          isCompleted: false,
        },
      ],
    }
    const toggleTodoAction = toggleTodoCompletedStatus('invalid_id')
    expect(reducer(currentState, toggleTodoAction)).toEqual({
      data: [{ id: 'any_id', text: 'any_text', isCompleted: false }],
    })
  })
})
