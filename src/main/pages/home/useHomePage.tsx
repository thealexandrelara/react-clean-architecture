import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from 'infra/global-state/redux/store/protocols'
import { CreateTodoPresenterParams } from 'presentation/presenters/todos/create-todo-protocols'
import { EditTodoPresenterParams } from 'presentation/presenters/todos/edit-todo-protocols'
import { makeCreateTodoPresenter } from 'main/factories/presenters/make-create-todo-presenter'
import { makeToggleTodoCompletedStatus } from 'main/factories/presenters/make-toggle-todo-completed-status-presenter'
import { makeDeleteTodoPresenter } from 'main/factories/presenters/make-delete-todo-presenter'
import { makeEditTodoPresenter } from 'main/factories/presenters/make-edit-todo-presenter'
import { TodoModel } from 'domain/models/Todo'

export type UseHomePageState = {
  todos: TodoModel[]
  createTodo(todo: CreateTodoPresenterParams): void
  toggleTodoCompletedStatus(id: string): void
  deleteTodo(id: string): void
  editTodo(id: string, todo: EditTodoPresenterParams): void
}

export const useHomePage = (): UseHomePageState => {
  const dispatch = useDispatch()
  const todos = useSelector((state: ApplicationState) => state.todos)
  const addTodoPresenter = makeCreateTodoPresenter(dispatch)
  const toggleTodoCompletedStatusPresenter = makeToggleTodoCompletedStatus(
    dispatch,
  )
  const deleteTodoPresenter = makeDeleteTodoPresenter(dispatch)
  const editTodoPresenter = makeEditTodoPresenter(dispatch)

  return {
    todos: todos.data,
    createTodo: addTodoPresenter.create,
    toggleTodoCompletedStatus:
      toggleTodoCompletedStatusPresenter.toggle,
    deleteTodo: deleteTodoPresenter.remove,
    editTodo: editTodoPresenter.edit,
  }
}
