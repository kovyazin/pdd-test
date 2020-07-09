import * as types from './types'

const initialState = {
  username: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    default:
      return state
  }
}
