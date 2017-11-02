import * as types from '../actions/types';

export const initialState = {
  fetchTweetsReducer: {},
  leaderboardReducer: {},
  userReducer: {}
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.PERSIST_REHYDRATE:
    return Object.assign({}, prevState, {
      fetchTweetsReducer: action.payload.fetchTweetsReducer,
      leaderboardReducer: action.payload.leaderboardReducer,
      userReducer: action.payload.userReducer
    });
  default:
    return prevState;
  }
};