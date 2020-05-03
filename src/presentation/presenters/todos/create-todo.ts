import { CreateTodo } from 'domain/use-cases/CreateTodo'
import { CreateTodoPresenterParams } from './create-todo-protocols'
import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
export class CreateTodoPresenter {
  constructor(private readonly createTodo: CreateTodo) {}

  create(todo: CreateTodoPresenterParams) {
    const parsedTodo: CreateTodoParams = {
      ...todo,
      isCompleted: false,
    }
    this.createTodo.create(parsedTodo)
  }
}
