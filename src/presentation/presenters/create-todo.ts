import { CreateTodo } from '@/domain/use-cases/CreateTodo'
import { CreateTodoParams } from './create-todo-protocols'
export class CreateTodoPresenter {
  constructor(private readonly createTodo: CreateTodo) {}

  create(todo: CreateTodoParams) {
    this.createTodo.create(todo)
  }
}
