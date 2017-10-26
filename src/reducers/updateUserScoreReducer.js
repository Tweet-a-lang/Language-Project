import * as types from '../actions/types';

export const initialState = {
  userScore: 0,
  gameScore: 0
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.UPDATE_USER_SCORE: {
    const newState = Object.assign({}, prevState);
    newState.userScore = action.payload.userScore + action.payload.gameScore;
    newState.gameScore = 0;
    return newState;
  }
  default:
    return prevState;
  }
};