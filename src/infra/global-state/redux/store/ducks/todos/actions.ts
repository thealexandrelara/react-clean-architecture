import { action } from 'typesafe-actions'

import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
import { RemoveTodoParams } from 'domain/use-cases/RemoveTodo'
import { EditTodoParams } from 'domain/use-cases/EditTodo'
import { TodoTypes } from './protocols'

export const createTodo = (todo: CreateTodoParams) =>
  action(TodoTypes.CREATE_TODO_REQUEST, { todo })

export const removeTodo = (id: RemoveTodoParams) =>
  action(TodoTypes.REMOVE_TODO_REQUEST, { id })

export const editTodo = (id: string, todo: EditTodoParams) =>
  action(TodoTypes.EDIT_TODO_REQUEST, { id, todo })
