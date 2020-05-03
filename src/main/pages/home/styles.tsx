import styled from 'styled-components'

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
  padding: 2rem 1rem;
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
  background: #7159c1;
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
