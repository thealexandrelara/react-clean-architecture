import { Dispatch } from 'redux'

import { EditTodoPresenter } from 'presentation/presenters/todos/edit-todo'
import { GlobalStateEditTodo } from 'data/use-cases/global-state-edit-todo'
import { TodoReduxRepository } from 'infra/global-state/redux/repositories/todo-redux-repository'
import { UUIDAdapter } from 'infra/random-generators/uuid-adapter/uuid-adapter'

export const makeEditTodoPresenter = (dispatch: Dispatch) => {
  const uuidGenerator = new UUIDAdapter()
  const todoReduxRepository = new TodoReduxRepository(
    dispatch,
    uuidGenerator,
  )
  const globalStateEditTodo = new GlobalStateEditTodo(
    todoReduxRepository,
  )

  return new EditTodoPresenter(globalStateEditTodo)
}
