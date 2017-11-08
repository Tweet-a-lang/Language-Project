import * as types from './types';
import axios from 'axios';

const API_URL = 'http://192.168.100.33:3001/api';


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