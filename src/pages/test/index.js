import React, { useEffect, Fragment } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import {
  CardQuestion,
  Header,
  testActions,
  testSelectors
} from '../../features/test'
import { Loader } from '../../ui'
import { sessionSelectors } from '../../lib/store/session'

import './styles.scss'

export const TestPage = () => {
  const dispatch = useDispatch()

  const tickets = useSelector(testSelectors.tickets)
  const isFetching = useSelector(testSelectors.isFetching)
  const error = useSelector(testSelectors.error)
  const currentQuestionPosition = useSelector(
    testSelectors.currentQuestionPosition
  )
  const currentQuestion = useSelector(testSelectors.currentQuestion)
  const wrongAnswersCounter = useSelector(testSelectors.wrongAnswersCounter)
  const username = useSelector(sessionSelectors.username)

  const history = useHistory()

  useEffect(() => {
    if (tickets.length === 0) dispatch(testActions.fetchTickets())
  }, [dispatch, tickets])

  useEffect(() => {
    if (tickets.length > 0) dispatch(testActions.generateTicket(tickets))
  }, [dispatch, tickets])

  useEffect(() => {
    if (!username) history.push('/')
  }, [username, history])

  useEffect(() => {
    if (wrongAnswersCounter > 2) {
      dispatch(testActions.setFinishStatus('defeat'))
      history.push('/finish')
    }
  }, [wrongAnswersCounter, dispatch, history])

  useEffect(() => {
    if (currentQuestionPosition > 20 && wrongAnswersCounter <= 2) {
      dispatch(dispatch.setFinishStatus('win'))
      history.push('/finish')
    }
  }, [currentQuestionPosition, dispatch, history, wrongAnswersCounter])

  const handleClickNextAnswer = (isCorrectAnswer) => {
    if (!isCorrectAnswer) dispatch(testActions.increaseWrongAnswersCounter())
    dispatch(
      testActions.setCurrentQuestionPosition(currentQuestionPosition + 1)
    )
  }

  const handleClickRetry = () => {
    dispatch(testActions.resetTest())
    dispatch(testActions.generateTicket(tickets))
  }

  return (
    <Container>
      <div className="test-page d-flex flex-column align-items-center justify-content-center py-5">
        {username && (
          <Fragment>
            {isFetching && <Loader />}
            {error && <Alert variant="danger">{error}</Alert>}
            {currentQuestion && (
              <div className="question-wrapper">
                <Header
                  className="mb-3"
                  errorsCount={wrongAnswersCounter}
                  questionNumber={currentQuestionPosition}
                  onClickRetry={handleClickRetry}
                />
                <CardQuestion
                  title={currentQuestion.title}
                  image={currentQuestion.image}
                  answers={currentQuestion.answers}
                  correct={currentQuestion.correct}
                  hint={currentQuestion.hint}
                  onClickNext={handleClickNextAnswer}
                />
              </div>
            )}
          </Fragment>
        )}
        {!username && <Loader />}
      </div>
    </Container>
  )
}
