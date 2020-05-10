import React, { useState } from 'react'
import { FaMinusSquare } from 'react-icons/fa'

import { TodoModel } from 'domain/models/Todo'

import {
  TodoForm,
  TodoItemCheckbox,
  TodoItemInputContainer,
  TodoItemInput,
  TodoItemDeleteButton,
} from './styles'
import { useTodoItem } from './use-todo-item'

type Props = {
  todo: TodoModel
}

export const TodoItem = ({ todo }: Props) => {
  const {
    toggleTodoCompletedStatus,
    deleteTodo,
    editTodo,
  } = useTodoItem()
  const [value, setValue] = useState(todo.text)

  const handleCheckboxClick = (id: string) => {
    if (!value) return
    toggleTodoCompletedStatus(id)
  }

  const handleDeleteTodo = (event: any, id: string) => {
    event.preventDefault()
    deleteTodo(id)
  }

  const handleOnInputKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    id: string,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      editTodo(id, { text: value })
    }
  }

  const handleOnInputBlur = (
    event: React.FocusEvent<HTMLInputElement>,
    id: string,
  ) => {
    event.preventDefault()
    event.stopPropagation()
    editTodo(id, { text: value })
  }

  return (
    <TodoForm key={todo.id}>
      <TodoItemCheckbox
        checked={todo.isCompleted}
        onChange={() => handleCheckboxClick(todo.id)}
      />
      <TodoItemInputContainer checked={todo.isCompleted}>
        <TodoItemInput
          autoFocus
          placeholder="Type your todo text here..."
          onKeyDown={(event) => handleOnInputKeyDown(event, todo.id)}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onBlur={(event) => handleOnInputBlur(event, todo.id)}
          data-testid={`todo-text-${todo.id}`}
          checked={todo.isCompleted}
        />
      </TodoItemInputContainer>
      <TodoItemDeleteButton
        onClick={(event) => handleDeleteTodo(event, todo.id)}
        data-testid={`delete-button-${todo.id}`}
      >
        <FaMinusSquare color="#fff" size={14} />
      </TodoItemDeleteButton>
    </TodoForm>
  )
}
