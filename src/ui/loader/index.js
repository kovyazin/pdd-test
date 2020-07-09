import React from 'react'

import PropTypes from 'prop-types'

import Spinner from 'react-bootstrap/Spinner'

export const Loader = ({ variant = 'primary' }) => {
  return (
    <Spinner animation="border" variant={variant} role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

Loader.propTypes = {
  variant: PropTypes.string
}
