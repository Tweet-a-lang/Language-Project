import * as types from './types';

export const updateVocab = (newPair) => ({
  type: types.UPDATE_VOCAB,
  payload: [newPair]
});