import axios from 'axios';
import { Dispatch } from 'redux';
import { ADD, CLEAR_ERRORS, DELETE, EDIT, FAIL, GET, GET_SIGNLE, SUCCESS } from '../constants/data';

import API_URL from '../../config';
import { Data } from '../../interfaces';

export const getAllData = () => async (dispatch: Dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/api`);
    dispatch({ type: GET, payload: result.data });
  } catch (error) {
    if (error instanceof Error) {
      // ✅ TypeScript knows err is Error
      dispatch({ type: FAIL, payload: error.message });
    } else {
      console.log('Unexpected error', error);
    }
  }
};

export const getSingleData = (payload: Data) => async (dispatch: Dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/api/${payload.id}`);
    dispatch({ type: GET_SIGNLE, payload: result.data });
  } catch (error) {
    if (error instanceof Error) {
      // ✅ TypeScript knows err is Error
      dispatch({ type: FAIL, payload: error.message });
    } else {
      console.log('Unexpected error', error);
    }
  }
};

export const addData = (payload: Data) => async (dispatch: Dispatch) => {
  try {
    await axios.post(`${API_URL}/api`, payload);
    dispatch({ type: ADD, payload });
    dispatch({
      type: SUCCESS,
      payload: 'data is added successfully!',
    });
  } catch (error) {
    if (error instanceof Error) {
      // ✅ TypeScript knows err is Error
      dispatch({ type: FAIL, payload: error.message });
    } else {
      console.log('Unexpected error', error);
    }
  }
};

export const editData = (payload: Data) => async (dispatch: Dispatch) => {
  try {
    await axios.put(`${API_URL}/api/${payload.id}`, payload);
    dispatch({ type: EDIT, payload });
    dispatch({
      type: SUCCESS,
      payload: 'data is updated successfully!',
    });
  } catch (error) {
    if (error instanceof Error) {
      // ✅ TypeScript knows err is Error
      dispatch({ type: FAIL, payload: error.message });
    } else {
      console.log('Unexpected error', error);
    }
  }
};

export const deleteData = (payload: Data) => async (dispatch: Dispatch) => {
  try {
    const result = await axios.delete(`${API_URL}/api/${payload.id}`);
    dispatch({ type: DELETE, payload });
    dispatch({
      type: SUCCESS,
      payload: 'data is deleted successfully!',
    });

    return result;
  } catch (error) {
    if (error instanceof Error) {
      // ✅ TypeScript knows err is Error
      dispatch({ type: FAIL, payload: error.message });
    } else {
      console.log('Unexpected error', error);
    }
  }
};

export const clearErrors = () => async (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
