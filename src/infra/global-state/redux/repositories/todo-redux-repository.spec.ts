import { TodoReduxRepository } from './todo-redux-repository'
import { UUIDGenerator } from 'data/protocols/random-generators/uuid-generator'
import {
  createTodo,
  removeTodo,
  editTodo,
  toggleTodoCompletedStatus,
} from '../store/ducks/todos/actions'

const makeUUIDGeneratorStub = () => {
  class UUIDGeneratorStub implements UUIDGenerator {
    generate(): string {
      return 'any_value'
    }
  }

  return new UUIDGeneratorStub()
}

interface SutTypes {
  dispatchSpy: jest.Mock
  sut: TodoReduxRepository
  uuidGeneratorStub: UUIDGenerator
}

const makeSut = (): SutTypes => {
  const dispatchSpy = jest.fn()
  const uuidGeneratorStub = makeUUIDGeneratorStub()
  const sut = new TodoReduxRepository(dispatchSpy, uuidGeneratorStub)

  return {
    dispatchSpy,
    sut,
    uuidGeneratorStub,
  }
}

describe('Todo Redux Repository', () => {
  describe('> create', () => {
    it('should call dispatch with correct action', () => {
      const { sut, dispatchSpy } = makeSut()
      sut.create({ text: 'any_text', isCompleted: false })

      expect(dispatchSpy).toHaveBeenCalledWith(
        createTodo({
          id: 'any_value',
          text: 'any_text',
          isCompleted: false,
        }),
      )
    })
  })

  describe('> remove', () => {
    it('should call dispatch with correct action', () => {
      const { sut, dispatchSpy } = makeSut()
      sut.remove('any_id')

      expect(dispatchSpy).toHaveBeenCalledWith(removeTodo('any_id'))
    })
  })

  describe('> edit', () => {
    it('should call dispatch with correct action', () => {
      const { sut, dispatchSpy } = makeSut()
      sut.edit('any_id', { text: 'any_text' })

      expect(dispatchSpy).toHaveBeenCalledWith(
        editTodo('any_id', { text: 'any_text' }),
      )
    })
  })

  describe('> toggle', () => {
    it('should call dispatch with correct action', () => {
      const { sut, dispatchSpy } = makeSut()
      sut.toggle()

      expect(dispatchSpy).toHaveBeenCalledWith(
        toggleTodoCompletedStatus(),
      )
    })
  })
})
