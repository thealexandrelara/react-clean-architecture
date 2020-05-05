import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

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
} from './styles'
import { useHomePage } from './useHomePage'

import { UseHomePageState } from './useHomePage'

export const Home = () => {
  const { todos, createTodo }: UseHomePageState = useHomePage()
  const [value, setValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!value) return

    createTodo({ text: value })
    setValue('')
  }

  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoItemContainer key={todo.id}>
        <TodoItemCheckbox />
        <TodoItemText>{todo.text}</TodoItemText>
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
