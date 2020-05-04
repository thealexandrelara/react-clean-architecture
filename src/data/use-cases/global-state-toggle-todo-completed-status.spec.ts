import { GlobalStateToggleTodoCompletedStatus } from './global-state-toggle-todo-completed-status'
import { ToggleTodoCompletedStatusRepository } from 'data/protocols/global-state/toggle-todo-completed-status'

describe('Global State Toggle Todo Completed Status', () => {
  it('should call ToggleTodoCompletedStatusRepository with correct values', () => {
    class ToggleTodoCompletedStatusRepositoryStub
      implements ToggleTodoCompletedStatusRepository {
      toggle(id: string) {}
    }
    const toggleTodoCompletedStatusRepositoryStub = new ToggleTodoCompletedStatusRepositoryStub()
    const sut = new GlobalStateToggleTodoCompletedStatus(
      toggleTodoCompletedStatusRepositoryStub,
    )
    const toggleSpy = jest.spyOn(
      toggleTodoCompletedStatusRepositoryStub,
      'toggle',
    )
    sut.toggle('any_id')

    expect(toggleSpy).toHaveBeenCalledWith('any_id')
  })
})
