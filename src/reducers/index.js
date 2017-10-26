import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import updateScoreReducer from './updateScoreReducer';
import saveUsernameReducer from './saveUsernameReducer';

const reducer = combineReducers({
  fetchTweetsReducer, updateScoreReducer, saveUsernameReducer
});

export default reducer;