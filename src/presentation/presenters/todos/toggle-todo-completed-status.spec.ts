import { ToggleTodoCompleteStatusPresenter } from './toggle-todo-completed-status'
import { ToggleTodoCompletedStatus } from 'domain/use-cases/ToggleTodoCompletedStatus'

describe('Toggle Todo Completed Status Presenter', () => {
  it('should call ToggleTodoCompleteStatus with correct values', () => {
    class ToggleTodoCompleteStatusStub
      implements ToggleTodoCompletedStatus {
      toggle() {}
    }

    const toggleTodoCompleteStatusStub = new ToggleTodoCompleteStatusStub()
    const sut = new ToggleTodoCompleteStatusPresenter(
      toggleTodoCompleteStatusStub,
    )
    const toggleSpy = jest.spyOn(
      toggleTodoCompleteStatusStub,
      'toggle',
    )
    sut.toggle('any_id')

    expect(toggleSpy).toHaveBeenCalledWith('any_id')
  })
})
