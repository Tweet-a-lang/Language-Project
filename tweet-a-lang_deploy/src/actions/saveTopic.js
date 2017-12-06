import * as types from './types';

export const saveTopic = (topic) => ({
  type: types.SAVE_TOPIC,
  payload: topic
});
