import { ToggleTodoCompletedStatusRepository } from 'data/protocols/global-state/toggle-todo-completed-status'
import { ToggleTodoCompletedStatus } from 'domain/use-cases/ToggleTodoCompletedStatus'

export class GlobalStateToggleTodoCompletedStatus
  implements ToggleTodoCompletedStatus {
  constructor(
    private readonly toggleTodoCompletedStatusRepository: ToggleTodoCompletedStatusRepository,
  ) {}

  toggle() {
    this.toggleTodoCompletedStatusRepository.toggle()
  }
}
