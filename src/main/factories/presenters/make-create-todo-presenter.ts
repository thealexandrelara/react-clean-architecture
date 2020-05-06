import { Dispatch } from 'redux'

import { CreateTodoPresenter } from 'presentation/presenters/todos/create-todo'
import { GlobalStateCreateTodo } from 'data/use-cases/global-state-create-todo'
import { TodoReduxRepository } from 'infra/global-state/redux/repositories/todo-redux-repository'
import { UUIDAdapter } from 'infra/random-generators/uuid-adapter/uuid-adapter'

export const makeCreateTodoPresenter = (dispatch: Dispatch) => {
  const uuidGenerator = new UUIDAdapter()
  const todoReduxRepository = new TodoReduxRepository(
    dispatch,
    uuidGenerator,
  )
  const globalStateCreateTodo = new GlobalStateCreateTodo(
    todoReduxRepository,
  )

  return new CreateTodoPresenter(globalStateCreateTodo)
}
