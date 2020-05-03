import { GlobalStateToggleTodoCompletedStatus } from './global-state-toggle-todo-completed-status'
import { ToggleTodoCompletedStatusRepository } from 'data/protocols/global-state/toggle-todo-completed-status'

describe('Global State Toggle Todo Completed Status', () => {
  it('should call ToggleTodoCompletedStatusRepository with correct values', () => {
    class ToggleTodoCompletedStatusRepositoryStub
      implements ToggleTodoCompletedStatusRepository {
      toggle() {}
    }
    const toggleTodoCompletedStatusRepositoryStub = new ToggleTodoCompletedStatusRepositoryStub()
    const sut = new GlobalStateToggleTodoCompletedStatus(
      toggleTodoCompletedStatusRepositoryStub,
    )
    const toggleSpy = jest.spyOn(
      toggleTodoCompletedStatusRepositoryStub,
      'toggle',
    )
    sut.toggle()

    expect(toggleSpy).toHaveBeenCalledWith()
  })
})
