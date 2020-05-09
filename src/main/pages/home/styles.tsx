import styled, { css } from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

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
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  margin: 2rem 1rem;
`

export const TodoListHeader = styled.div`
  display: grid;
  grid-template-areas:
    'todo-list-day todo-list-tasks'
    'todo-list-month todo-list-tasks';
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

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 50px;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`

export const SubmitButton = styled.button.attrs((props) => ({}))`
  background: #3f51b5;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-content: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0;
`

export const Subtitle = styled.h3`
  font-size: 1rem;
  margin-top: 0.1rem;
  color: #3f51b5;
`

export const TodoItemContainer = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  align-items: center;
  grid-template-columns: auto 1fr auto;
`

export const TodoItemCheckbox = styled(Checkbox)`
  margin-left: -0.8rem;
`

const checkedTodoItemTextAnimationStyles = css`
  bottom: 40%;
`

const uncheckedTodoItemTextAnimationStyles = css`
  bottom: -25%;
`

interface TodoItemTextProps {
  readonly checked: boolean
}

export const TodoItemText = styled.span<TodoItemTextProps>`
  font-size: 1.2rem;
  width: 100%;
  position: relative;
  width: 100%;
  cursor: pointer;
  ${(props) =>
    props.checked &&
    css`
      color: #e0e0e0;
    `}

  &::after {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.1rem;
    background: #e0e0e0;
    transition: bottom 0.25s ease-in-out 0s;

    ${(props) =>
      props.checked
        ? checkedTodoItemTextAnimationStyles
        : uncheckedTodoItemTextAnimationStyles}
  }
`

export const TodoItemDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background: #e57373;
  margin-left: 0.5rem;
  border: 0;
  visibility: visible;
  opacity: 1;
  transition: visibility 0.5s ease-in, opacity 0.5s ease-in;

  ${TodoItemContainer}:not(:hover) & {
    visibility: hidden;
    opacity: 0;
  }
`
