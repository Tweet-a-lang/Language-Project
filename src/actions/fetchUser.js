import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';


export const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST
});

export const fetchUserSuccess = (data) => ({
  type: types.FETCH_USER_SUCCESS,
  payload: data
});

export const fetchUserFailure = (error) => ({
  type: types.FETCH_USER_FAILURE,
  payload: error
});

export default (username) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    return axios.get(`${API_URL}/user/${username}`)
      .then(res => {
        dispatch(fetchUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};