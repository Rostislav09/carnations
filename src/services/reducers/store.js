import { combineReducers } from 'redux'
import { pdfReducer } from './pdf'
import { userReducer } from './user'

export const rootReducer = combineReducers({
  pdf: pdfReducer,
  user: userReducer
})