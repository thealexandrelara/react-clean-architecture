import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from 'infra/global-state/redux/store/protocols'
import { CreateTodoPresenterParams } from 'presentation/presenters/todos/create-todo-protocols'
import { makeCreateTodoPresenter } from 'main/factories/presenters/make-create-todo-presenter'
import { TodoModel } from 'domain/models/Todo'
import { DateFormatAdapter } from '../../../infra/date/date-format-adapter/date-format-adapter'

export type UseHomePageState = {
  todos: TodoModel[]
  createTodo(todo: CreateTodoPresenterParams): void
  formatDate(date: Date, expectedFormat: string): string
}

export const useHomePage = (): UseHomePageState => {
  const dispatch = useDispatch()
  const todos = useSelector((state: ApplicationState) => state.todos)
  const addTodoPresenter = makeCreateTodoPresenter(dispatch)
  const dateFormatAdapter = new DateFormatAdapter()

  return {
    todos: todos.data,
    createTodo: addTodoPresenter.create,
    formatDate: dateFormatAdapter.format,
  }
}
