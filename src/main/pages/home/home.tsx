import React from 'react'
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'

import { Container, Content, Form, SubmitButton } from './styles'

export const Home = () => {
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
      </Content>
    </Container>
  )
}
