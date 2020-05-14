import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/App'
import { act } from 'react-dom/test-utils'

describe('CRA Index file', () => {
  it('should render without crashing', async () => {
    const renderSpy = jest.spyOn(ReactDOM, 'render')
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)

    act(() => {
      require('./index.tsx')
    })

    expect(renderSpy).toHaveBeenCalled()
  })
})
