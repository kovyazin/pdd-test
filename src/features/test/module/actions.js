import * as types from './types'
import * as ticketsApi from '../../../api/tickets'
import { randomIntFromInterval } from '../../../lib/random'

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketsRequest())

  try {
    const tickets = await ticketsApi.getTickets()
    dispatch(fetchTicketsSuccess(tickets))
  } catch (e) {
    dispatch(fetchTicketsFailure(e.message))
  }
}

const fetchTicketsRequest = () => ({ type: types.FETCH_TICKETS_REQUEST })
const fetchTicketsSuccess = (tickets) => ({
  type: types.FETCH_TICKETS_SUCCESS,
  payload: tickets
})
const fetchTicketsFailure = (error) => ({
  type: types.FETCH_TICKETS_FAILURE,
  payload: error
})

export const generateTicket = (tickets) => (dispatch) => {
  const counter = {}

  const generatedQuestions = new Array(20)
    .fill(null)
    .map((el, i, generatedQuestions) => {
      const getRandomSection = () => {
        const filteredSection = tickets.filter(({ position }) => {
          return counter[position] === undefined || counter[position] <= 4
        })

        const idx = randomIntFromInterval(0, filteredSection.length - 1)

        const { position } = filteredSection[idx]
        counter[position] =
          counter[position] === undefined ? 1 : counter[position] + 1

        return filteredSection[idx]
      }

      const getRandomQuestion = (section) => {
        const filteredQuestions = section.tickets.filter(({ title }) => {
          return !generatedQuestions.some(
            (question) => title === question?.title
          )
        })

        const idx = randomIntFromInterval(0, filteredQuestions.length - 1)

        return filteredQuestions[idx]
      }

      const question = getRandomQuestion(getRandomSection())

      return {
        ...question,
        position: i + 1,
        image: `https://raw.githubusercontent.com/etspring/pdd_russia/master/${question.image}`
      }
    })

  dispatch(setCurrentTicket(generatedQuestions))
}

const setCurrentTicket = (ticket) => ({
  type: types.SET_CURRENT_TICKET,
  payload: ticket
})

export const setCurrentQuestionPosition = (position) => ({
  type: types.SET_CURRENT_QUESTION_POSITION,
  payload: position
})

export const increaseWrongAnswersCounter = () => ({
  type: types.INCREASE_WRONG_ANSWERS_COUNTER
})

export const setFinishStatus = (status) => ({
  type: types.SET_FINISH_STATUS,
  payload: status
})

export const resetTest = () => ({ type: types.RESET_TEST })
