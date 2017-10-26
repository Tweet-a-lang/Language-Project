import { expect } from 'chai';
import updateUserScoreReducer, { initialState } from '../../src/reducers/updateUserScoreReducer';
import { updateUserScore } from '../../src/actions/updateUserScore';


describe('updateUserScore reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed prevState if passed an unrecognised action', () => {
      const prevState = {};
      const newState = updateUserScoreReducer(prevState, { type: 'whatever' });
      expect(newState).to.equal(prevState);
    });
    it('uses the default initialState if no prevState is passed', () => {
      const newState = updateUserScoreReducer(undefined, { type: 'whatever' });
      expect(newState).to.eql(initialState);
    });
  });
  describe('actions::UPDATE_USER_SCORE', () => {
    it('updates the user score', () => {
      let action = updateUserScore(10, 50);
      let newState = updateUserScoreReducer(initialState, action);
      expect(newState.userScore).to.eql(60);
    });
  });
});