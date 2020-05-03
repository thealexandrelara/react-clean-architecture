import { DeleteTodoPresenter } from './delete-todo'
import {
  RemoveTodo,
  RemoveTodoParams,
} from 'domain/use-cases/RemoveTodo'

describe('Delete Todo Presenter', () => {
  it('should call DeleteTodo with correct values', () => {
    class DeleteTodoStub implements RemoveTodo {
      remove(todo: RemoveTodoParams) {}
    }

    const deleteTodoStub = new DeleteTodoStub()
    const sut = new DeleteTodoPresenter(deleteTodoStub)
    const createSpy = jest.spyOn(deleteTodoStub, 'remove')
    sut.remove('any_id')

    expect(createSpy).toHaveBeenCalledWith('any_id')
  })
})
