import * as types from './types';

export const decreaseScore = (score) => ({
    type: types.DECREASE_SCORE,
    payload: score
})