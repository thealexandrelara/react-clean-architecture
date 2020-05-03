import { action } from 'typesafe-actions'

import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
import { TodoTypes } from './protocols'

export const createTodo = (todo: CreateTodoParams) =>
  action(TodoTypes.CREATE_TODO_REQUEST, { todo })

export const removeTodo = (todo: CreateTodoParams) =>
  action(TodoTypes.REMOVE_TODO_REQUEST, { todo })
