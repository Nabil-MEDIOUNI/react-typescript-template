import { combineReducers } from 'redux'
import quotesReducer from './quotes'

const rootReducer = combineReducers({
  quotesReducer,
})

export default rootReducer
