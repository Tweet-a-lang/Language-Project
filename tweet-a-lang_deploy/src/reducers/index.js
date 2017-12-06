// import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import userReducer from './userReducer';
import leaderboardReducer from './leaderboardReducer';
// import persistRehydrateReducer from './persistRehydrateReducer'; // Reducer created for v4 redux-persist, but v5 doesn't need it

export default {
  fetchTweetsReducer, userReducer, leaderboardReducer
};
