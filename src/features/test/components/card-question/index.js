import React, { useState, Fragment, useEffect } from 'react'

import PropTypes from 'prop-types'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export const CardQuestion = ({
  image,
  title,
  correct,
  hint,
  answers,
  position,
  onClickNext
}) => {
  const [userAnswer, setUserAnswer] = useState(null)

  const isAnswered = userAnswer !== null
  const isCorrectAnswer = userAnswer === correct && isAnswered
  const isWrongAnswer = !isCorrectAnswer && isAnswered

  useEffect(() => {
    setUserAnswer(null)
  }, [position])

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>{title}</Card.Text>
        <ListGroup>
          {answers.map((answer) => {
            const answerId = answer.slice(0, 1)

            const variant =
              isCorrectAnswer && userAnswer === answerId
                ? 'success'
                : isWrongAnswer && userAnswer === answerId
                ? 'danger'
                : null

            const disabled = isAnswered && userAnswer !== answerId

            return (
              <ListGroup.Item
                onClick={() => setUserAnswer(answerId)}
                as="button"
                key={answerId}
                variant={variant}
                disabled={disabled}
                action
              >
                {answer}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
        {isAnswered && (
          <Fragment>
            <Alert className="mt-3 mb-3" variant="info">
              {hint}
            </Alert>
            <div className="d-flex justify-content-end">
              <Button onClick={() => onClickNext(isCorrectAnswer)}>
                Далее
              </Button>
            </div>
          </Fragment>
        )}
      </Card.Body>
    </Card>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  correct: PropTypes.number.isRequired,
  hint: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.number
}
