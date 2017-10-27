import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import saveUsernameReducer from './saveUsernameReducer';
import userReducer from './userReducer';
import leaderboardReducer from './leaderboardReducer';

const reducer = combineReducers({
  fetchTweetsReducer, saveUsernameReducer, userReducer, leaderboardReducer
});

export default reducer;