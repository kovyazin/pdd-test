import React from 'react'

import { Switch, Route } from 'react-router-dom'

import { HomePage } from './home'
import { NotFoundPage } from './not-found'

import { paths } from './paths'

export const Pages = () => {
  return (
    <Switch>
      <Route path={paths.home()} component={HomePage} exact />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  )
}
