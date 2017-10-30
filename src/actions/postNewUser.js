import axios from 'axios';
import * as types from './types';

const API_URL = 'http://192.168.100.33:3001/api';

export const postNewUserRequest = (name) => ({
  type: types.POST_NEW_USER_REQUEST,
  payload: name
});
  
export const postNewUserSuccess = (userData) => ({
  type: types.POST_NEW_USER_SUCCESS,
  payload: userData
});
  
export const postNewUserFailure = (error) => ({
  type: types.POST_NEW_USER_FAILURE,
  payload: error
});

export default (name) => {
  return (dispatch) => {
    dispatch(postNewUserRequest());
    return axios.post(`${API_URL}/user`, {name})
      .then(res => {
        return dispatch(postNewUserSuccess(res.data));
      })
      .catch(error => { 
        return dispatch(postNewUserFailure(error.message));
      });
  };
};