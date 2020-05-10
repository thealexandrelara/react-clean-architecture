import styled, { css } from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

export const TodoForm = styled.form`
  display: grid;
  grid-gap: 0.25rem;
  align-items: center;
  grid-template-columns: 2rem 1fr 1.4rem;
  padding: 1rem 2rem;
`

export const TodoItemCheckbox = styled(Checkbox)`
  margin-left: -0.8rem;
`

export const TodoItemInputContainer = styled.span<TodoItemTextProps>`
  display: inline-block;
  position: relative;
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
    height: 2px;
    background: #e6edf3;
    transition: bottom 0.25s ease-in-out 0s;

    ${(props) =>
      props.checked
        ? checkedTodoItemTextAnimationStyles
        : uncheckedTodoItemTextAnimationStyles}
  }
`

export const TodoItemInput = styled.input`
  color: #82829c;
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
  position: relative;
  width: 100%;
  cursor: pointer;
  border: 0;

  ::placeholder {
    color: #d5d5e1;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #d5d5e1;
  }

  ::-ms-input-placeholder {
    color: #d5d5e1;
  }

  ${(props) =>
    props.checked &&
    css`
      color: #d5d5e1;
      ::placeholder {
        color: #d5d5e1;
        opacity: 1;
      }

      :-ms-input-placeholder {
        color: #d5d5e1;
      }

      ::-ms-input-placeholder {
        color: #d5d5e1;
      }
    `}
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

  ${TodoForm}:not(:hover) & {
    visibility: hidden;
    opacity: 0;
  }
`
