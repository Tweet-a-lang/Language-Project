import { expect } from 'chai';
import { updateCompletedTweets } from '../../src/actions/updateCompletedTweets';
import * as types from '../../src/actions/types';


describe('updateCompletedTweets action creator', () => {
  it('adds the completed tweetID to the payload', () => {
    expect(updateCompletedTweets(12345678901234)).to.eql({
      type: types.UPDATE_COMPLETED_TWEETS,
      payload: 12345678901234
    });
  });
});