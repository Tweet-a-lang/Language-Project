import { expect } from 'chai';
import { increaseScore } from '../../src/actions/increaseScore';
import * as types from '../../src/actions/types'


describe('increaseScore action creator', () => {
  it('adds the score to the payload', () => {
    expect(increaseScore(10)).to.eql({
      type: types.INCREASE_SCORE,
      payload: 10
    });
  });
});