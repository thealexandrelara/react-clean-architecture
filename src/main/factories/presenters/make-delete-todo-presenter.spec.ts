import { makeDeleteTodoPresenter } from './make-delete-todo-presenter'
import { DeleteTodoPresenter } from 'presentation/presenters/todos/delete-todo'

describe('Make Delete Todo Presenter', () => {
  it('should correctly create a DeleteTodoPresenter', () => {
    const dispatch = jest.fn()
    const deleteTodoPresenter = makeDeleteTodoPresenter(dispatch)

    expect(
      deleteTodoPresenter instanceof DeleteTodoPresenter,
    ).toBeTrue()
  })
})
