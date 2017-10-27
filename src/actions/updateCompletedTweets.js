import * as types from './types';

export const updateCompletedTweets = (tweetID) => ({
  type: types.UPDATE_COMPLETED_TWEETS,
  payload: tweetID
});
