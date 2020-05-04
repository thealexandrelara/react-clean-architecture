import React from 'react'
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

export const Home = () => {
  const { todos } = useHomePage()

  return (
    <Container>
      <Content>
        <Form>
          <input
            name="type"
            type="text"
            placeholder="Please, type your todo text here..."
          />
          <SubmitButton>
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </Form>
        <Title>Todo List</Title>
        <Subtitle>{todos.length} tasks</Subtitle>
      </Content>
    </Container>
  )
}
