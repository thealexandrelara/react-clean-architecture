import { Dispatch } from 'redux'

import {
  createTodo,
  removeTodo,
  editTodo,
} from 'infra/global-state/redux/store/ducks/todos/actions'
import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
import { CreateTodoRepository } from 'data/protocols/global-state/create-todo'
import { RemoveTodoRepository } from 'data/protocols/global-state/remove-todo'
import { EditTodoRepository } from 'data/protocols/global-state/edit-todo'
import { RemoveTodoParams } from 'domain/use-cases/RemoveTodo'
import { EditTodoParams } from 'domain/use-cases/EditTodo'

export class TodoReduxRepository
  implements
    CreateTodoRepository,
    RemoveTodoRepository,
    EditTodoRepository {
  constructor(private readonly dispatch: Dispatch) {}

  create(todo: CreateTodoParams) {
    this.dispatch(createTodo(todo))
  }

  remove(id: RemoveTodoParams) {
    this.dispatch(removeTodo(id))
  }

  edit(id: string, todo: EditTodoParams) {
    this.dispatch(editTodo(id, todo))
  }
}
