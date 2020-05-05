import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'infra/global-state/redux/store'

const AllTheProviders: React.ComponentType = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export const renderWithAllProviders = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'
