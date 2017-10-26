import * as types from './types';

export const increaseScore = (gameScore) => ({
  type: types.INCREASE_SCORE,
  payload: gameScore
});

export const decreaseScore = (gameScore) => ({
  type: types.DECREASE_SCORE,
  payload: gameScore
});