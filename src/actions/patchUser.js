import axios from 'axios';
import * as types from './types';

import API_URL from '../api_url';


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

export default (username, score, completedTweets, vocab) => {
  return (dispatch) => {
    dispatch(patchUserRequest());
    return axios.patch(`${API_URL}/user/${username}`, {score, completedTweets, vocab})
      .then(res => {
        return dispatch(patchUserSuccess(res.data));
      })
      .catch(error => {
        return dispatch(patchUserFailure(error.message));
      });
  };
};