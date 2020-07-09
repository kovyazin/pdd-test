import React from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export const NotFoundPage = () => {
  return (
    <Container>
      <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to="/">
          <Button variant="outline-primary">Вернуться на главную</Button>
        </Link>
      </div>
    </Container>
  )
}
