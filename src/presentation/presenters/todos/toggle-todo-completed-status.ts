import { ToggleTodoCompletedStatus } from 'domain/use-cases/ToggleTodoCompletedStatus'

export class ToggleTodoCompleteStatusPresenter {
  constructor(
    private readonly toggleTodoCompletedStatus: ToggleTodoCompletedStatus,
  ) {}

  toggle(id: string) {
    this.toggleTodoCompletedStatus.toggle(id)
  }
}
