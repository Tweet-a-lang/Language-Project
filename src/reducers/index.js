import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import updateScoreReducer from './updateScoreReducer';
import saveUsernameReducer from './saveUsernameReducer';
import fetchUserReducer from './fetchUserReducer';

const reducer = combineReducers({
  fetchTweetsReducer, updateScoreReducer, saveUsernameReducer, fetchUserReducer
});

export default reducer;