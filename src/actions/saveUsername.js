import * as types from './types';

export const saveUsername = (username) => ({
  type: types.SAVE_USERNAME,
  payload: username
});