import { TodosState } from './ducks/todos/protocols'

export interface ApplicationState {
  todos: TodosState
}
