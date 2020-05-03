import { EditTodoRepository } from 'data/protocols/global-state/create-todo'
import { EditTodo, EditTodoParams } from 'domain/use-cases/EditTodo'

export class GlobalStateEditTodo implements EditTodo {
  constructor(
    private readonly editTodoRepository: EditTodoRepository,
  ) {}

  edit(id: string, todo: EditTodoParams) {
    this.editTodoRepository.edit(id, todo)
  }
}
