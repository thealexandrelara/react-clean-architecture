import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StylesProvider } from '@material-ui/core/styles'

import { Routes } from 'main/routes'
import { GlobalStyles } from 'main/styles/global'

import { store } from 'infra/global-state/redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <StylesProvider injectFirst>
          <Routes />
        </StylesProvider>
      </Router>
    </Provider>
  )
}

export default App
