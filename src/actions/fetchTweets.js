import * as types from './types';
import axios from 'axios';

const API_URL = 'https://northcoders-news-api.herokuapp.com/api';

export const fetchTweetsRequest = () => ({
  type: types.FETCH_TWEETS_REQUEST
  // payload: handle
});

export const fetchTweetsSuccess = (data) => ({
  type: types.FETCH_TWEETS_SUCCESS,
  payload: data
});

export const fetchTweetsFailure = (error) => ({
  type: types.FETCH_TWEETS_FAILURE,
  payload: error
});

export default () => {
  return (dispatch) => {
    dispatch(fetchTweetsRequest());
    return axios.get(`${API_URL}/articles`)
      .then(res => {
        dispatch(fetchTweetsSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchTweetsFailure(err.message));
      });
  };
};