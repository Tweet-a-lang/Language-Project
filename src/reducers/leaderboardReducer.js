import * as types from '../actions/types';
import testData from './TESTLeaderboardData';

export const initialState = {
  loading: false,
  error: null,
  leaderboardData: testData
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_LEADERBOARD_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      leaderboardData: []
    });
  case types.FETCH_LEADERBOARD_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      leaderboardData: action.payload
    });
  case types.FETCH_LEADERBOARD_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      leaderboardData: []
    });
  default:
    return prevState;
  }
};