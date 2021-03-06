import { createSelector } from 'reselect'

export const tickets = (state) => state.test.tickets
export const isFetching = (state) => state.test.isFetching
export const error = (state) => state.test.error

export const currentTicket = (state) => state.test.currentTicket
export const wrongAnswersCounter = (state) => state.test.wrongAnswersCounter
export const finishStatus = (state) => state.test.finishStatus
export const currentQuestionPosition = (state) =>
  state.test.currentQuestionPosition

export const currentQuestion = createSelector(
  [currentTicket, currentQuestionPosition],
  (ticket, position) =>
    ticket.find((question) => question.position === position)
)
