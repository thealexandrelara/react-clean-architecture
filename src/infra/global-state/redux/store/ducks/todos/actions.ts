import { action } from 'typesafe-actions'

import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
import { RemoveTodoParams } from 'domain/use-cases/RemoveTodo'
import { TodoTypes } from './protocols'

export const createTodo = (todo: CreateTodoParams) =>
  action(TodoTypes.CREATE_TODO_REQUEST, { todo })

export const removeTodo = (id: RemoveTodoParams) =>
  action(TodoTypes.REMOVE_TODO_REQUEST, { id })
