import * as types from './types';

export const saveUsername = (username) => ({
  type: types.SAVE_HANDLE,
  payload: username
});