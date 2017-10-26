import { expect } from 'chai';
import { updateUserScore } from '../../src/actions/updateUserScore';
import * as types from '../../src/actions/types';


describe('updateUserScore action creator', () => {
  it('adds the score to the payload', () => {
    expect(updateUserScore(50, 10)).to.eql({
      type: types.UPDATE_USER_SCORE,
      payload: {
        gameScore: 50,
        userScore: 10
      }
    });
  });
});