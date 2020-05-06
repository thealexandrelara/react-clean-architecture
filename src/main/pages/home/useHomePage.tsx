import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from 'infra/global-state/redux/store/protocols'
import { CreateTodoPresenterParams } from 'presentation/presenters/todos/create-todo-protocols'
import { makeCreateTodoPresenter } from 'main/factories/presenters/make-create-todo-presenter'
import { makeToggleTodoCompletedStatus } from 'main/factories/presenters/make-toggle-todo-completed-status-presenter'
import { makeDeleteTodoPresenter } from 'main/factories/presenters/make-delete-todo-presenter'

export type UseHomePageState = {
  todos: any[]
  createTodo(todo: CreateTodoPresenterParams): void
  toggleTodoCompletedStatus(id: string): void
  deleteTodo(id: string): void
}

export const useHomePage = (): UseHomePageState => {
  const dispatch = useDispatch()
  const todos = useSelector((state: ApplicationState) => state.todos)
  const addTodoPresenter = makeCreateTodoPresenter(dispatch)
  const toggleTodoCompletedStatusPresenter = makeToggleTodoCompletedStatus(
    dispatch,
  )
  const deleteTodoPresenter = makeDeleteTodoPresenter(dispatch)

  return {
    todos: todos.data,
    createTodo: addTodoPresenter.create,
    toggleTodoCompletedStatus:
      toggleTodoCompletedStatusPresenter.toggle,
    deleteTodo: deleteTodoPresenter.remove,
  }
}
