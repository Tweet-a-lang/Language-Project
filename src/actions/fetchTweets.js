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

export default (username, topic) => {
  return (dispatch) => {
    dispatch(fetchTweetsRequest());
    let getTweetsURL = '';
    if(topic === 'random' || topic === undefined) {
      getTweetsURL = `${API_URL}/tweets/${username}`;
    } else {
      getTweetsURL = `${API_URL}/tweets/${username}/${topic}`;
    }
    return axios.get(getTweetsURL)
      .then(res => {
        dispatch(fetchTweetsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchTweetsFailure(err.message));
      });
  };
};