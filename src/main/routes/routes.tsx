import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from 'main/pages/home'

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)
