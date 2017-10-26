import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import gameScoreReducer from './gameScoreReducer';
import updateUserScoreReducer from './updateUserScoreReducer';
import saveUsernameReducer from './saveUsernameReducer';
import fetchUserReducer from './fetchUserReducer';

const reducer = combineReducers({
  fetchTweetsReducer, gameScoreReducer, saveUsernameReducer, fetchUserReducer, updateUserScoreReducer
});

export default reducer;