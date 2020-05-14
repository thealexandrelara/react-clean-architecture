import { makeToggleTodoCompletedStatus } from './make-toggle-todo-completed-status-presenter'
import { ToggleTodoCompleteStatusPresenter } from 'presentation/presenters/todos/toggle-todo-completed-status'

describe('Make Toggle Todo Completed Status Presenter', () => {
  it('should correctly create a ToggleTodoCompleteStatusPresenter', () => {
    const dispatch = jest.fn()
    const toggleTodoCompletedStatusPresenter = makeToggleTodoCompletedStatus(
      dispatch,
    )

    expect(
      toggleTodoCompletedStatusPresenter instanceof
        ToggleTodoCompleteStatusPresenter,
    ).toBeTrue()
  })
})
