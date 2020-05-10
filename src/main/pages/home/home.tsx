import React from 'react'
import AddIcon from '@material-ui/icons/Add'

import { TodoList } from './components/todo-list/todo-list'

import {
  Container,
  Content,
  TodoListContent,
  TodoListCreateTodoButton,
  TodoListHeader,
  TodoListDay,
  TodoListMonth,
  TodoListTasksAmount,
  PageTitle,
} from './styles'
import { useHomePage } from './useHomePage'

import { UseHomePageState } from './useHomePage'

export const Home = () => {
  const { todos, createTodo }: UseHomePageState = useHomePage()

  const handleCreateTodo = () => {
    createTodo({ text: '' })
  }

  return (
    <Container>
      <PageTitle>Clean Todo</PageTitle>
      <Content>
        <TodoListHeader>
          <TodoListDay>Thursday, 10th</TodoListDay>
          <TodoListMonth>December</TodoListMonth>
          <TodoListTasksAmount>
            {todos.length} tasks
          </TodoListTasksAmount>
          <TodoListCreateTodoButton onClick={handleCreateTodo}>
            <AddIcon />
          </TodoListCreateTodoButton>
        </TodoListHeader>
        <TodoListContent>
          <TodoList />
        </TodoListContent>
      </Content>
    </Container>
  )
}
