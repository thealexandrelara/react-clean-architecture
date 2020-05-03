import React from 'react'
import { render } from '@testing-library/react'

import { Home } from './home'

describe('Home component', () => {
  it('should contain an input', () => {
    const { getByPlaceholderText } = render(<Home />)

    expect(
      getByPlaceholderText('Please, type your todo text here...'),
    ).toBeInTheDocument()
  })

  it('should contain an Add Todo button', () => {
    const { getByRole } = render(<Home />)

    expect(getByRole('button')).toBeInTheDocument()
  })
})
