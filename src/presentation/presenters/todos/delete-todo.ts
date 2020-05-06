import { RemoveTodo } from 'domain/use-cases/RemoveTodo'
import { DeleteTodoPresenterParams } from './delete-todo-protocols'

export class DeleteTodoPresenter {
  constructor(private readonly removeTodo: RemoveTodo) {}

  remove = (id: DeleteTodoPresenterParams) => {
    this.removeTodo.remove(id)
  }
}
