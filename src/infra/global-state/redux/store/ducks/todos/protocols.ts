import { TodoModel } from 'domain/models/Todo'

export enum TodoTypes {
  CREATE_TODO_REQUEST = '@todos/CREATE_TODO_REQUEST',
  REMOVE_TODO_REQUEST = '@todos/REMOVE_TODO_REQUEST',
  EDIT_TODO_REQUEST = '@todos/EDIT_TODO_REQUEST',
  TOGGLE_TODO_COMPLETED_STATUS = '@todos/TOGGLE_TODO_COMPLETED_STATUS',
}
export interface TodosState {
  readonly data: TodoModel[]
}
