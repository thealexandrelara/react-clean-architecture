import { Dispatch } from 'redux'

import {
  createTodo,
  removeTodo,
} from 'infra/global-state/redux/store/ducks/todos/actions'
import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
import { CreateTodoRepository } from 'data/protocols/global-state/create-todo'
import { RemoveTodoRepository } from 'data/protocols/global-state/remove-todo'
import { RemoveTodoParams } from 'domain/use-cases/RemoveTodo'

export class TodoReduxRepository
  implements CreateTodoRepository, RemoveTodoRepository {
  constructor(private readonly dispatch: Dispatch) {}

  create(todo: CreateTodoParams) {
    this.dispatch(createTodo(todo))
  }

  remove(id: RemoveTodoParams) {
    this.dispatch(removeTodo(id))
  }
}
