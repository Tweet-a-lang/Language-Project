import { expect } from 'chai';
import { decreaseScore } from '../../src/actions/decreaseScore';
import * as types from '../../src/actions/types';


describe('decreaseScore action creator', () => {
  it('adds the score to the payload', () => {
    expect(decreaseScore(2)).to.eql({
      type: types.DECREASE_SCORE,
      payload: 2
    });
  });
});