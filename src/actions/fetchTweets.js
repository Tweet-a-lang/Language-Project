import * as types from './types';
import axios from 'axios';

const API_URL = 'http://192.168.100.33:3001/api';

export const fetchTweetsRequest = () => ({
  type: types.FETCH_TWEETS_REQUEST
});

export const fetchTweetsSuccess = (data) => ({
  type: types.FETCH_TWEETS_SUCCESS,
  payload: data
});

export const fetchTweetsFailure = (error) => ({
  type: types.FETCH_TWEETS_FAILURE,
  payload: error
});

export default (username) => {
  return (dispatch) => {
    dispatch(fetchTweetsRequest());
    return axios.get(`${API_URL}/tweets/${username}`)
      .then(res => {
        dispatch(fetchTweetsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchTweetsFailure(err.message));
      });
  };
};