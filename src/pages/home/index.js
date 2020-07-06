import React from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const HomePage = () => {
  return (
    <Container>
      <div className="text-center d-flex flex-column align-items-center justify-content-center vh-100">
        <h1>Добро пожаловать!</h1>
        <p>Для того чтобы начать тест, вам необходимо ввести своё имя</p>

        <Form className="w-50" inline>
          <Form.Label srOnly>Имя</Form.Label>
          <Form.Control
            className="flex-grow-1 mr-2"
            placeholder="Введите ваше имя"
          />
          <Button type="submit">Начать тест</Button>
        </Form>
      </div>
    </Container>
  )
}
