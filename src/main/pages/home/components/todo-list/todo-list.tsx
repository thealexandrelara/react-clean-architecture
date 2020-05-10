import React from 'react'

import { TodoItem } from './todo-item/todo-item'
import { useTodoList } from './use-todo-list'

export const TodoList = () => {
  const { todos } = useTodoList()
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
