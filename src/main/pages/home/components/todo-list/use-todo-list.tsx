import { useSelector } from 'react-redux'
import { ApplicationState } from 'infra/global-state/redux/store/protocols'
import { TodoModel } from 'domain/models/Todo'

export type UseTodoListState = {
  todos: TodoModel[]
}

export const useTodoList = (): UseTodoListState => {
  const todos = useSelector((state: ApplicationState) => state.todos)

  return {
    todos: todos.data,
  }
}
