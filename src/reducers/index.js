import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import increaseScoreReducer from './increaseScoreReducer';
import saveUsernameReducer from './saveUsernameReducer';

console.log('index-reducers');

const reducer = combineReducers({
  fetchTweetsReducer, increaseScoreReducer, saveUsernameReducer
});

export default reducer;