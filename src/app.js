import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Pages } from './pages'

import { store } from './lib/store'

import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Pages />
      </Router>
    </Provider>
  )
}
