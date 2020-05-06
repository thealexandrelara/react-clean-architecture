import { Dispatch } from 'redux'

import { ToggleTodoCompleteStatusPresenter } from 'presentation/presenters/todos/toggle-todo-completed-status'
import { GlobalStateToggleTodoCompletedStatus } from 'data/use-cases/global-state-toggle-todo-completed-status'
import { TodoReduxRepository } from 'infra/global-state/redux/repositories/todo-redux-repository'
import { UUIDAdapter } from 'infra/random-generators/uuid-adapter/uuid-adapter'

export const makeToggleTodoCompletedStatus = (dispatch: Dispatch) => {
  const uuidGenerator = new UUIDAdapter()
  const todoReduxRepository = new TodoReduxRepository(
    dispatch,
    uuidGenerator,
  )
  const globalStateToggleCompletedStatus = new GlobalStateToggleTodoCompletedStatus(
    todoReduxRepository,
  )

  return new ToggleTodoCompleteStatusPresenter(
    globalStateToggleCompletedStatus,
  )
}
