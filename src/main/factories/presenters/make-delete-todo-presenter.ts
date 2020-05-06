import { Dispatch } from 'redux'

import { DeleteTodoPresenter } from 'presentation/presenters/todos/delete-todo'
import { GlobalStateRemoveTodo } from 'data/use-cases/global-state-remove-todo'
import { TodoReduxRepository } from 'infra/global-state/redux/repositories/todo-redux-repository'
import { UUIDAdapter } from 'infra/random-generators/uuid-adapter/uuid-adapter'

export const makeDeleteTodoPresenter = (dispatch: Dispatch) => {
  const uuidGenerator = new UUIDAdapter()
  const todoReduxRepository = new TodoReduxRepository(
    dispatch,
    uuidGenerator,
  )
  const globalStateDeleteTodo = new GlobalStateRemoveTodo(
    todoReduxRepository,
  )

  return new DeleteTodoPresenter(globalStateDeleteTodo)
}
