import { GlobalStateRemoveTodo } from './global-state-remove-todo'
import { RemoveTodoParams } from 'domain/use-cases/RemoveTodo'
import { RemoveTodoRepository } from 'data/protocols/global-state/remove-todo'

describe('Global State Create Todo', () => {
  it('should call RemoveTodoRepository with correct values', () => {
    class RemoveTodoRepositoryStub implements RemoveTodoRepository {
      remove(id: RemoveTodoParams) {}
    }
    const createTodoRepositoryStub = new RemoveTodoRepositoryStub()
    const sut = new GlobalStateRemoveTodo(createTodoRepositoryStub)
    const removeSpy = jest.spyOn(createTodoRepositoryStub, 'remove')
    sut.remove('any_id')

    expect(removeSpy).toHaveBeenCalledWith('any_id')
  })
})
