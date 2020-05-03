import { RemoveTodoParams } from 'domain/use-cases/RemoveTodo'

export interface RemoveTodoRepository {
  remove(todo: RemoveTodoParams): void
}
