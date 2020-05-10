import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 500px) 1fr;
  grid-template-areas: '. content .';
`

export const PageTitle = styled.h1`
  grid-area: content;
  grid-row: 1;
  justify-self: center;
  margin: 2rem 1rem 0;
  color: white;
`

export const Content = styled.div`
  grid-area: content;
  grid-row: 2;
  background-color: white;
  min-height: 30rem;
  border-radius: 0.5rem;
  margin: 2rem 1rem;
`

export const TodoListHeader = styled.div`
  display: grid;
  position: relative;
  grid-template-areas:
    'todo-list-day todo-list-tasks'
    'todo-list-month todo-list-tasks';
  padding: 2rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom: #e6edf3 1px solid;
  background: linear-gradient(white, #f9f9fe);
`

export const TodoListDay = styled.span`
  grid-area: todo-list-day;
  font-weight: bold;
  font-size: 1.5rem;
  color: #686bfb;
`

export const TodoListMonth = styled.span`
  grid-area: todo-list-month;
  font-size: 1rem;
  color: #bcbdcd;
`

export const TodoListTasksAmount = styled.span`
  grid-area: todo-list-tasks;
  justify-self: end;
  align-self: center;
  font-size: 1rem;
  color: #bcbdcd;
`

export const TodoListContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
`

export const TodoListCreateTodoButton = styled(IconButton)`
  position: absolute;
  bottom: -1.75rem;
  right: 2rem;

  height: 3.5rem;
  width: 3.5rem;

  background: #f76d6e;
  color: white;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    background: #ed6868;
  }
`
