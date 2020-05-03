import { createTodo } from './actions'
import { TodoTypes } from './protocols'

describe('Todo Actions', () => {
  describe('> createTodo', () => {
    it('should return action with correct type and payload', () => {
      expect(createTodo({ text: 'any_text' })).toEqual({
        type: TodoTypes.CREATE_TODO_REQUEST,
        payload: {
          todo: {
            text: 'any_text',
          },
        },
      })
    })
  })
})
