import * as types from '../actions/types';

export const initialState = {
  gameScore: 0
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.INCREASE_SCORE: {
    const newState = Object.assign({}, prevState);
    newState.gameScore = prevState.gameScore + action.payload;
    return newState;
  }
  case types.DECREASE_SCORE: {
    const newState = Object.assign({}, prevState);
    newState.gameScore = prevState.gameScore - action.payload;
    return newState;
  }
  default:
    return prevState;
  }
};