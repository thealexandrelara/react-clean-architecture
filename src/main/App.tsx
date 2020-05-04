import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import { Routes } from 'main/routes'
import { GlobalStyles } from 'main/styles/global'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <StylesProvider injectFirst>
        <Routes />
      </StylesProvider>
    </Router>
  )
}

export default App
