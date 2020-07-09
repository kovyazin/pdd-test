import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { sessionActions } from '../../lib/store/session'
import { paths } from '../paths'

export const HomePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [validated, setValidated] = useState(false)

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget

    e.preventDefault()

    if (form.checkValidity()) {
      dispatch(sessionActions.setUsername(username))
      history.push(paths.test())
    }

    setValidated(true)
  }

  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1>Добро пожаловать!</h1>
          <p>Для того чтобы начать тест, вам необходимо ввести своё имя</p>
        </div>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="w-50"
        >
          <Form.Label srOnly>Имя</Form.Label>
          <Form.Control
            value={username}
            onChange={handleChangeUsername}
            className="flex-grow-1 mr-2"
            placeholder="Введите ваше имя"
            required
          />
          <Form.Control.Feedback type="invalid">
            Пожалуйста, введите ваше имя
          </Form.Control.Feedback>
          <Button className="mt-3" type="submit" block>
            Начать тест
          </Button>
        </Form>
      </div>
    </Container>
  )
}
