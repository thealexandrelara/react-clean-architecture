import { EditTodo } from 'domain/use-cases/EditTodo'
import { EditTodoPresenterParams } from './edit-todo-protocols'
import { EditTodoParams } from 'domain/use-cases/EditTodo'
export class EditTodoPresenter {
  constructor(private readonly editTodo: EditTodo) {}

  edit(id: string, todo: EditTodoPresenterParams) {
    this.editTodo.edit(id, todo)
  }
}
