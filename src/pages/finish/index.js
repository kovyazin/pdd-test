import React, { useEffect, Fragment } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { testSelectors, testActions } from '../../features/test'
import { sessionSelectors } from '../../lib/store/session'
import { Loader } from '../../ui'

export const FinishPage = () => {
  const dispatch = useDispatch()
  const finishStatus = useSelector(testSelectors.finishStatus)
  const wrongAnswersCounter = useSelector(testSelectors.wrongAnswersCounter)
  const username = useSelector(sessionSelectors.username)

  const history = useHistory()

  useEffect(() => {
    if (finishStatus === 'not finished') history.push('/')
  }, [finishStatus, history])

  const handleClickRetry = () => {
    dispatch(testActions.resetTest())
    history.push('/test')
  }

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      {finishStatus === 'not finished' && <Loader />}
      {finishStatus !== 'not finished' && (
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              {finishStatus === 'win' && (
                <Fragment>
                  Поздравляем вас, <b>{username}</b>, с успешным прохождением
                  теста <br />
                  Допущено ошибок: {wrongAnswersCounter}
                </Fragment>
              )}
              {finishStatus === 'defeat' && (
                <Fragment>
                  К сожалению, <b>{username}</b>, вы допустили более 2 ошибок и
                  не прошли тест. Не унывайте, пробуйте ещё и у вас обязательно
                  всё получится.
                </Fragment>
              )}
            </Card.Text>
            <Button variant="outline-primary" onClick={handleClickRetry}>
              Пройти тест ещё раз
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}
