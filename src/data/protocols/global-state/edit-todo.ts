import { EditTodoParams } from 'domain/use-cases/EditTodo'

export interface EditTodoRepository {
  edit(id: string, todo: EditTodoParams): void
}
