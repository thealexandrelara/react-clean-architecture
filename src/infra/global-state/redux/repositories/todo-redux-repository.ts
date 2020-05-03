import { Dispatch } from 'redux'

import {
  createTodo,
  removeTodo,
  editTodo,
  toggleTodoCompletedStatus,
} from '../store/ducks/todos/actions'
import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
import { RemoveTodoParams } from 'domain/use-cases/RemoveTodo'
import { EditTodoParams } from 'domain/use-cases/EditTodo'
import { CreateTodoRepository } from 'data/protocols/global-state/create-todo'
import { RemoveTodoRepository } from 'data/protocols/global-state/remove-todo'
import { EditTodoRepository } from 'data/protocols/global-state/edit-todo'
import { ToggleTodoCompletedStatusRepository } from 'data/protocols/global-state/toggle-todo-completed-status'

export class TodoReduxRepository
  implements
    CreateTodoRepository,
    RemoveTodoRepository,
    EditTodoRepository,
    ToggleTodoCompletedStatusRepository {
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

  toggle() {
    this.dispatch(toggleTodoCompletedStatus())
  }
}
