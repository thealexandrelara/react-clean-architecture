import { action } from 'typesafe-actions'

import { TodoModel } from 'domain/models/Todo'
import { RemoveTodoParams } from 'domain/use-cases/RemoveTodo'
import { EditTodoParams } from 'domain/use-cases/EditTodo'
import { TodoTypes } from './protocols'

export const createTodo = (todo: TodoModel) =>
  action(TodoTypes.CREATE_TODO_REQUEST, { todo })

export const removeTodo = (id: RemoveTodoParams) =>
  action(TodoTypes.REMOVE_TODO_REQUEST, { id })

export const editTodo = (id: string, todo: EditTodoParams) =>
  action(TodoTypes.EDIT_TODO_REQUEST, { id, todo })

export const toggleTodoCompletedStatus = () =>
  action(TodoTypes.TOGGLE_TODO_COMPLETED_STATUS)
