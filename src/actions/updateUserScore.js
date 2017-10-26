import * as types from './types';

export const updateUserScore = (gameScore, userScore) => ({
  type: types.UPDATE_USER_SCORE,
  payload: {gameScore, userScore}
});


