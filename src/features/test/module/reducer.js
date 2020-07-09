import * as types from './types'

const initialState = {
  tickets: [],
  isFetching: true,
  error: null,
  currentTicket: [],
  wrongAnswersCounter: 0,
  currentQuestionPosition: 1,
  finishStatus: 'not finished' // win, defeat
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.payload,
        isFetching: false,
        error: null
      }
    case types.FETCH_TICKETS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case types.FETCH_TICKETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case types.SET_CURRENT_TICKET:
      return {
        ...state,
        currentTicket: action.payload
      }
    case types.SET_CURRENT_QUESTION_POSITION:
      return {
        ...state,
        currentQuestionPosition: action.payload
      }
    case types.INCREASE_WRONG_ANSWERS_COUNTER:
      return {
        ...state,
        wrongAnswersCounter: state.wrongAnswersCounter + 1
      }
    case types.SET_FINISH_STATUS:
      return {
        ...state,
        finishStatus: action.payload
      }
    case types.RESET_TEST:
      return {
        ...initialState,
        tickets: state.tickets,
        isFetching: state.isFetching,
        error: state.error
      }
    default:
      return state
  }
}
