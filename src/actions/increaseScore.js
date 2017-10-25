import * as types from './types';

export const increaseScore = (score) => ({
  type: types.INCREASE_SCORE,
  payload: score
});