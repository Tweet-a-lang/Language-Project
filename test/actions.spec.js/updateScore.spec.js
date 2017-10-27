import { expect } from 'chai';
import { increaseScore, decreaseScore } from '../../src/actions/updateScore';
import * as types from '../../src/actions/types';


describe('updateScore action creators', () => {
  it('adds the increase score to the payload', () => {
    expect(increaseScore(10)).to.eql({
      type: types.INCREASE_SCORE,
      payload: 10
    });
  });
  it('adds the decrease score to the payload', () => {
    expect(decreaseScore(2)).to.eql({
      type: types.DECREASE_SCORE,
      payload: 2
    });
  });
});