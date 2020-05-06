import React, { useState } from 'react'
import { FaPlus, FaMinusSquare } from 'react-icons/fa'

import {
  Container,
  Content,
  Form,
  SubmitButton,
  Title,
  Subtitle,
  TodoItemContainer,
  TodoItemCheckbox,
  TodoItemText,
  TodoItemDeleteButton,
} from './styles'
import { useHomePage } from './useHomePage'

import { UseHomePageState } from './useHomePage'

export const Home = () => {
  const {
    todos,
    createTodo,
    toggleTodoCompletedStatus,
    deleteTodo,
  }: UseHomePageState = useHomePage()
  const [value, setValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!value) return

    createTodo({ text: value })
    setValue('')
  }

  const handleCheckboxClick = (id: string) => {
    toggleTodoCompletedStatus(id)
  }

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id)
  }

  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoItemContainer key={todo.id}>
        <TodoItemCheckbox
          checked={todo.isCompleted}
          onChange={() => handleCheckboxClick(todo.id)}
        />
        <TodoItemText
          checked={todo.isCompleted}
          data-testid={`todo-text-${todo.text}`}
          onClick={() => handleCheckboxClick(todo.id)}
        >
          {todo.text}
        </TodoItemText>
        <TodoItemDeleteButton
          onClick={() => handleDeleteTodo(todo.id)}
          data-testid={`delete-button-${todo.text}`}
        >
          <FaMinusSquare color="#fff" size={14} />
        </TodoItemDeleteButton>
      </TodoItemContainer>
    ))
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <input
            name="type"
            type="text"
            placeholder="Please, type your todo text here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <SubmitButton type="submit">
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </Form>
        <Title>Todo List</Title>
        <Subtitle>{todos.length} tasks</Subtitle>
        {renderTodos()}
      </Content>
    </Container>
  )
}
