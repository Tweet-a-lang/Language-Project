import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import increaseScoreReducer from './increaseScoreReducer';

const reducer = combineReducers({
  fetchTweetsReducer, increaseScoreReducer
});

export default reducer;