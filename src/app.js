import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { Pages } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  )
}
