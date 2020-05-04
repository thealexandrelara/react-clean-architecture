import styled from 'styled-components'
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
export const TodoItemText = styled.p`
  font-size: 1.2rem;
`
