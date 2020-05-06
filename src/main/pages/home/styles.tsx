import styled, { keyframes, css } from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 500px) 1fr;
  grid-template-areas: '. content .';
`

export const Content = styled.div`
  grid-area: content;
  background-color: white;
  min-height: 30rem;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  margin: 2rem 1rem;
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
  grid-template-columns: auto 1fr;
`

export const TodoItemCheckbox = styled(Checkbox)`
  margin-left: -0.8rem;
`

const checkedTodoItemTextKeyframes = keyframes`
  from {
    bottom: 0;
  }

  to {
    bottom: 40%;
  }
`

const uncheckedTodoItemTextKeyframes = keyframes`
  from {
    bottom: 40%;
  }

  to {
    bottom: 0;
  }
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
