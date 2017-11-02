import * as types from './types';

export const persistRehydrate = (state) => ({
  type: types.PERSIST_REHYDRATE,
  payload: state
});