import { TodoReduxRepository } from './todo-redux-repository'
import { createTodo } from 'infra/global-state/redux/store/ducks/todos/actions'

describe('Todo Redux Repository', () => {
  it('should call dispatch with correct action', () => {
    const dispatchSpy = jest.fn()
    const sut = new TodoReduxRepository(dispatchSpy)
    sut.create({ text: 'any_text' })

    expect(dispatchSpy).toHaveBeenCalledWith(
      createTodo({ text: 'any_text' }),
    )
  })
})
