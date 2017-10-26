import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import gameScoreReducer from './gameScoreReducer';
import updateUserScoreReducer from './updateUserScoreReducer';
import saveUsernameReducer from './saveUsernameReducer';
import fetchUserReducer from './fetchUserReducer';
import leaderboardReducer from './leaderboardReducer';

const reducer = combineReducers({
  fetchTweetsReducer, gameScoreReducer, saveUsernameReducer, fetchUserReducer, updateUserScoreReducer, leaderboardReducer
});

export default reducer;