import { expect } from 'chai';
import gameScoreReducer, { initialState } from '../../src/reducers/gameScoreReducer';
import { increaseScore, decreaseScore } from '../../src/actions/gameScore';

describe('gameScore reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed prevState if passed an unrecognised action', () => {
      const prevState = {};
      const newState = gameScoreReducer(prevState, { type: 'whatever' });
      expect(newState).to.equal(prevState);
    });
    it('uses the default initialState if no prevState is passed', () => {
      const newState = gameScoreReducer(undefined, { type: 'whatever' });
      expect(newState).to.eql(initialState);
    });
  });
  describe('actions::INCREASE_SCORE', () => {
    it('increases the score', () => {
      let action = increaseScore(10);
      let newState = gameScoreReducer(initialState, action);
      expect(newState.gameScore).to.eql(10);
    });
  });
  describe('actions::DECREASE_SCORE', () => {
    it('decreases the score', () => {
      let action = decreaseScore(2);
      let newState = gameScoreReducer(initialState, action);
      expect(newState.gameScore).to.eql(-2);
    });
  });
});