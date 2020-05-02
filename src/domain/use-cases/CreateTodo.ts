import { TodoModel } from 'domain/models/Todo'

export type CreateTodoParams = Omit<TodoModel, 'id'>
export interface CreateTodo {
  create(todo: CreateTodoParams): void
}
