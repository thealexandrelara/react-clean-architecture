import { CreateTodo } from '@/domain/use-cases/CreateTodo'

export class CreateTodoPresenter {
  constructor(private readonly createTodo: CreateTodo) {}

  create(text: string) {
    this.createTodo.create(text)
  }
}
