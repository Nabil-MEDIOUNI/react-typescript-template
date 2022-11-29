import { Data } from '../../interfaces'
import {
  FAIL,
  LOAD,
  CLEAR_ERRORS,
  SUCCESS,
  GET,
  ADD,
  DELETE,
  GET_SIGNLE,
} from '../constants/quotes'

// initialstate
const initialState = {
  data: [],
  quote: {},
  errors: '',
  success: '',
  isLoad: false,
}

interface QuotesReducerInterface {
  type: string
  payload: Data
}

const QuotesReducer = (state = initialState, { type, payload }: QuotesReducerInterface) => {
  switch (type) {
    case GET:
      return { ...state, data: payload, isLoad: false }
    case GET_SIGNLE:
      return { ...state, user: payload }
    case ADD:
      return { ...state, data: [...state.data, payload], isLoad: false }
    case DELETE:
      const newData = state.data.filter((element: Data) => element.id !== payload.id)
      return { ...state, data: newData, isLoad: false }
    case LOAD:
      return { ...state, isLoad: true }
    case FAIL:
      return { ...state, errors: payload, isLoad: false }
    case SUCCESS:
      return { ...state, success: payload, isLoad: false }
    case CLEAR_ERRORS:
      return { ...state, success: '', errors: '' }
    default:
      return state
  }
}

export default QuotesReducer
