import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';


export const fetchLeaderboardRequest = () => ({
  type: types.FETCH_LEADERBOARD_REQUEST
});

export const fetchLeaderboardSuccess = (data) => ({
  type: types.FETCH_LEADERBOARD_SUCCESS,
  payload: data
});

export const fetchLeaderboardFailure = (error) => ({
  type: types.FETCH_LEADERBOARD_FAILURE,
  payload: error
});

export default () => {
  return (dispatch) => {
    dispatch(fetchLeaderboardRequest());
    return axios.get(`${API_URL}/scoreboard`)
      .then(res => {
        dispatch(fetchLeaderboardSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchLeaderboardFailure(err.message));
      });
  };
};