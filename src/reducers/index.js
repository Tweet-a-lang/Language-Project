import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import increaseScoreReducer from './increaseScoreReducer';
import Handle from './Handle';


const reducer = combineReducers({
  fetchTweetsReducer, increaseScoreReducer, Handle
});

export default reducer;