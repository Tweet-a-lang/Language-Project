import { combineReducers } from 'redux';
import fetchTweetsReducer from './fetchTweetsReducer';
import fetchTweetsReducer from './fetchTweetsReducer';

const reducer = combineReducers({
    fetchTweetsReducer, increaseScoreReducer
})

export default reducer;