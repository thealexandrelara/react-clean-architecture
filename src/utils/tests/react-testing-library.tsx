import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'

const AllTheProviders: React.ComponentType = ({ children }) => {
  const { store } = require('infra/global-state/redux/store')
  return <Provider store={store}>{children}</Provider>
}

export const renderWithAllProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
