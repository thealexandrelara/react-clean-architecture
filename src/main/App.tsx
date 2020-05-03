import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Routes } from 'main/routes'
import { GlobalStyles } from 'main/styles/global'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  )
}

export default App
