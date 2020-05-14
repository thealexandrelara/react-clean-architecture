import { makeEditTodoPresenter } from './make-edit-todo-presenter'
import { EditTodoPresenter } from 'presentation/presenters/todos/edit-todo'

describe('Make Edit Todo Presenter', () => {
  it('should correctly create a EditTodoPresenter', () => {
    const dispatch = jest.fn()
    const editTodoPresenter = makeEditTodoPresenter(dispatch)

    expect(editTodoPresenter instanceof EditTodoPresenter).toBeTrue()
  })
})
