import { combineReducers } from 'redux'

import { sessionReducer } from './session'
import { testReducer } from '../../features/test'

export const rootReducer = combineReducers({
  session: sessionReducer,
  test: testReducer
})