import { expect } from 'chai';
import { increaseScore, decreaseScore, updateUserScore } from '../../src/actions/updateScore';
import * as types from '../../src/actions/types';


describe('gameScore action creators', () => {
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
  it('adds the score to the payload', () => {
    expect(updateUserScore(50)).to.eql({
      type: types.UPDATE_USER_SCORE,
      payload: 50
    });
  });
});