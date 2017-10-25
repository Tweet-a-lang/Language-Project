import { expect } from 'chai';
import saveUsernameReducer, { initialState } from '../../src/reducers/saveUsernameReducer';
import { saveUsername } from '../../src/actions/saveUsername';

describe('saveUsername reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed prevState if passed an unrecognised action', () => {
      const prevState = {};
      const newState = saveUsernameReducer(prevState, { type: 'whatever' });
      expect(newState).to.equal(prevState);
    });
    it('uses the default initialState if no prevState is passed', () => {
      const newState = saveUsernameReducer(undefined, { type: 'whatever' });
      expect(newState).to.eql(initialState);
    });
  });
  describe('actions::SAVE_USERNAME', () => {
    it('adds the username', () => {
      let action = saveUsername('smith');
      let newState = saveUsernameReducer(initialState, action);
      expect(newState.username).to.eql('smith');
    });
  });
});