import {
  createTodo,
  removeTodo,
  editTodo,
  toggleTodoCompletedStatus,
} from './actions'
import { TodoTypes } from './protocols'

describe('Todo Actions', () => {
  describe('> createTodo', () => {
    it('should return action with correct type and payload', () => {
      expect(
        createTodo({
          id: 'any_id',
          text: 'any_text',
          isCompleted: false,
        }),
      ).toEqual({
        type: TodoTypes.CREATE_TODO_REQUEST,
        payload: {
          todo: {
            id: 'any_id',
            text: 'any_text',
            isCompleted: false,
          },
        },
      })
    })
  })

  describe('> removeTodo', () => {
    it('should return action with correct type and payload', () => {
      expect(removeTodo('any_id')).toEqual({
        type: TodoTypes.REMOVE_TODO_REQUEST,
        payload: {
          id: 'any_id',
        },
      })
    })
  })

  describe('> editTodo', () => {
    it('should return action with correct type and payload', () => {
      expect(editTodo('any_id', { text: 'any_text' })).toEqual({
        type: TodoTypes.EDIT_TODO_REQUEST,
        payload: {
          id: 'any_id',
          todo: {
            text: 'any_text',
          },
        },
      })
    })
  })

  describe('> toggleTodoCompletedStatus', () => {
    it('should return action with correct type and payload', () => {
      expect(toggleTodoCompletedStatus('any_id')).toEqual({
        type: TodoTypes.TOGGLE_TODO_COMPLETED_STATUS,
        payload: {
          id: 'any_id',
        },
      })
    })
  })
})
