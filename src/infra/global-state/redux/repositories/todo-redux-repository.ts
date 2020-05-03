import { Dispatch } from 'redux'

import { createTodo } from 'infra/global-state/redux/store/ducks/todos/actions'
import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
import { CreateTodoRepository } from 'data/protocols/global-state/create-todo'

export class TodoReduxRepository implements CreateTodoRepository {
  constructor(private readonly dispatch: Dispatch) {}

  create(todo: CreateTodoParams) {
    this.dispatch(createTodo(todo))
  }
}
