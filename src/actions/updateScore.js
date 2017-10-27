import * as types from './types';

export const increaseScore = (score) => ({
  type: types.INCREASE_SCORE,
  payload: score
});

export const decreaseScore = (score) => ({
  type: types.DECREASE_SCORE,
  payload: score
});

export const updateUserScore = (score) => ({
  type: types.UPDATE_USER_SCORE,
  payload: score
});