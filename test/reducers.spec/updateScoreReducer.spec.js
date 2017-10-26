import { expect } from 'chai';
import updateScoreReducer, { initialState } from '../../src/reducers/updateScoreReducer';
import { increaseScore, decreaseScore } from '../../src/actions/updateScore';

describe('updateScore reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed prevState if passed an unrecognised action', () => {
      const prevState = {};
      const newState = updateScoreReducer(prevState, { type: 'whatever' });
      expect(newState).to.equal(prevState);
    });
    it('uses the default initialState if no prevState is passed', () => {
      const newState = updateScoreReducer(undefined, { type: 'whatever' });
      expect(newState).to.eql(initialState);
    });
  });
  describe('actions::INCREASE_SCORE', () => {
    it('increases the score', () => {
      let action = increaseScore(10);
      let newState = updateScoreReducer(initialState, action);
      expect(newState.score).to.eql(10);
    });
  });
  describe('actions::DECREASE_SCORE', () => {
    it('decreases the score', () => {
      let action = decreaseScore(2);
      let newState = updateScoreReducer(initialState, action);
      expect(newState.score).to.eql(-2);
    });
  });
});