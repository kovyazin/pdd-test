import React from 'react'

import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'

import { Icons } from '../../../../ui'

export const Header = ({ questionNumber, errorsCount, className, onClickRetry }) => {
  const classes = ['border rounded d-flex align-items-center p-3']
  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')}>
      <div className="mr-auto">Вопрос №{questionNumber}</div>
      <div className="mr-3">Ошибок: {errorsCount} из 2</div>
      <Button size="sm" variant="outline-secondary" onClick={onClickRetry}>
        <Icons.ArrowClockwise />
      </Button>
    </div>
  )
}

Header.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
  className: PropTypes.string,
  onClickRetry: PropTypes.func
}
