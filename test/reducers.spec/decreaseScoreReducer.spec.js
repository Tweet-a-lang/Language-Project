import { expect } from 'chai';
import decreaseScoreReducer, { getInitialState } from '../../src/reducers/decreaseScoreReducer';
import { decreaseScore } from '../../src/actions/decreaseScore';

xdescribe('decreaseScore reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed prevState if passed an unrecognised action', () => {
      const prevState = {};
      const newState = decreaseScoreReducer(prevState, { type: 'whatever' });
      expect(newState).to.equal(prevState);
    });
    it('uses the default initialState if no prevState is passed', () => {
      const newState = decreaseScoreReducer(undefined, { type: 'whatever' });
      expect(newState).to.eql(getInitialState());
    });
  });
  describe('actions::DECREASE_SCORE', () => {
    it('decreases the score', () => {
      let action = decreaseScore(2);
      let newState = decreaseScoreReducer(getInitialState(), action);
      expect(newState.score).to.eql(-2);
    });
  });
});