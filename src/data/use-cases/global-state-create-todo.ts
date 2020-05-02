import { CreateTodoRepository } from 'data/protocols/global-state/create-todo'
import {
  CreateTodo,
  CreateTodoParams,
} from 'domain/use-cases/CreateTodo'

export class GlobalStateCreateTodo implements CreateTodo {
  constructor(
    private readonly createTodoRepository: CreateTodoRepository,
  ) {}

  create(todo: CreateTodoParams) {
    this.createTodoRepository.create(todo)
  }
}
