import { CreateTodoParams } from 'domain/use-cases/CreateTodo'

export interface CreateTodoRepository {
  create(todo: CreateTodoParams): void
}
