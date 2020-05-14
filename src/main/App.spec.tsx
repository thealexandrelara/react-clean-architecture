import React from 'react'
import { render, screen } from 'utils/tests/react-testing-library'
import App from './App'

describe('App Component', () => {
  it('should render component without any errors', () => {
    render(<App />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
