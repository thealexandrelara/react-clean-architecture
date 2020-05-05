import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from 'infra/global-state/redux/store/protocols'
import { CreateTodoPresenter } from 'presentation/presenters/todos/create-todo'
import { GlobalStateCreateTodo } from 'data/use-cases/global-state-create-todo'
import { TodoReduxRepository } from 'infra/global-state/redux/repositories/todo-redux-repository'
import { UUIDAdapter } from '../../../infra/random-generators/uuid-adapter/uuid-adapter'
import { CreateTodoPresenterParams } from 'presentation/presenters/todos/create-todo-protocols'

export type UseHomePageState = {
  todos: any[]
  createTodo(todo: CreateTodoPresenterParams): void
}

const makeCreateTodoPresenter = (dispatch: Dispatch) => {
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

export const useHomePage = (): UseHomePageState => {
  const dispatch = useDispatch()
  const todos = useSelector((state: ApplicationState) => state.todos)
  const addTodoPresenter = makeCreateTodoPresenter(dispatch)

  return {
    todos: todos.data,
    createTodo: addTodoPresenter.create,
  }
}
