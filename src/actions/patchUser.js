import axios from 'axios';
import * as types from './types';

const API_URL = 'http://192.168.100.33:3001/api';

export const patchUserRequest = () => ({
  type: types.PATCH_USER_REQUEST
});
  
export const patchUserSuccess = (userData) => ({
  type: types.PATCH_USER_SUCCESS,
  payload: userData
});
  
export const patchUserFailure = (error) => ({
  type: types.PATCH_USER_FAILURE,
  payload: error
});

export default (username, score, completedTweets) => {
  return (dispatch) => {
    dispatch(patchUserRequest());
    return axios.patch(`${API_URL}/user/${username}`, {score, completedTweets})
      .then(res => {
        return dispatch(patchUserSuccess(res.data));
      })
      .catch(error => {
        return dispatch(patchUserFailure(error.message));
      });
  };
};