import { Data } from '../../interfaces';
import { ADD, CLEAR_ERRORS, DELETE, FAIL, GET, GET_SIGNLE, LOAD, SUCCESS } from '../constants/data';

// initialstate
const initialState = {
  data: [],
  errors: '',
  success: '',
  isLoad: false,
};

interface QuotesReducerInterface {
  type: string;
  payload: Data;
}

const DataReducer = (state = initialState, { type, payload }: QuotesReducerInterface) => {
  switch (type) {
    case GET:
      return { ...state, data: payload, isLoad: false };
    case GET_SIGNLE:
      return { ...state, user: payload };
    case ADD:
      return { ...state, data: [...state.data, payload], isLoad: false };
    case DELETE:
      const newData = state.data.filter((element: Data) => element.id !== payload.id);
      return { ...state, data: newData, isLoad: false };
    case LOAD:
      return { ...state, isLoad: true };
    case FAIL:
      return { ...state, errors: payload, isLoad: false };
    case SUCCESS:
      return { ...state, success: payload, isLoad: false };
    case CLEAR_ERRORS:
      return { ...state, success: '', errors: '' };
    default:
      return state;
  }
};

export default DataReducer;
