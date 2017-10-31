import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import userReducer from './userReducer';
import leaderboardReducer from './leaderboardReducer';

const reducer = combineReducers({
  fetchTweetsReducer, userReducer, leaderboardReducer
});

export default reducer;