import { TodoReduxRepository } from './todo-redux-repository'
import {
  createTodo,
  removeTodo,
  editTodo,
} from '../store/ducks/todos/actions'

describe('Todo Redux Repository', () => {
  describe('> create', () => {
    it('should call dispatch with correct action', () => {
      const dispatchSpy = jest.fn()
      const sut = new TodoReduxRepository(dispatchSpy)
      sut.create({ text: 'any_text', isCompleted: false })

      expect(dispatchSpy).toHaveBeenCalledWith(
        createTodo({ text: 'any_text', isCompleted: false }),
      )
    })
  })

  describe('> remove', () => {
    it('should call dispatch with correct action', () => {
      const dispatchSpy = jest.fn()
      const sut = new TodoReduxRepository(dispatchSpy)
      sut.remove('any_id')

      expect(dispatchSpy).toHaveBeenCalledWith(removeTodo('any_id'))
    })
  })

  describe('> edit', () => {
    it('should call dispatch with correct action', () => {
      const dispatchSpy = jest.fn()
      const sut = new TodoReduxRepository(dispatchSpy)
      sut.edit('any_id', { text: 'any_text' })

      expect(dispatchSpy).toHaveBeenCalledWith(
        editTodo('any_id', { text: 'any_text' }),
      )
    })
  })
})
