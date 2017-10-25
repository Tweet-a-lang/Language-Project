import * as types from './types';

export const increaseScore = (score) => ({
    type: types.INCRASE_SCORE,
    payload: score
})