import { makeCreateTodoPresenter } from './make-create-todo-presenter'
import { CreateTodoPresenter } from 'presentation/presenters/todos/create-todo'

describe('Make Create Todo Presenter', () => {
  it('should correctly create a CreateTodoPresenter', () => {
    const dispatch = jest.fn()
    const createTodoPresenter = makeCreateTodoPresenter(dispatch)

    expect(
      createTodoPresenter instanceof CreateTodoPresenter,
    ).toBeTrue()
  })
})
