import { expect } from 'chai';
import persistRehydrateReducer, { initialState } from '../../src/reducers/persistRehydrateReducer';
import { persistRehydrate } from '../../src/actions/persistRehydrate';

describe('persistRehydrate reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'whatever' };
      const newState = persistRehydrateReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = { type: 'whatever' };
      const newState = persistRehydrateReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  describe('actions::PERSIST_REHYDRATE', () => {
    it('refreshes with the previous state', () => {
      let action = persistRehydrate({fetchTweetsReducer: {example: 'tweets example'}, leaderboardReducer: {example: 'board example'}, userReducer: {example: 'user example'}});
      let newState = persistRehydrateReducer(initialState, action);
      expect(newState.fetchTweetsReducer).to.eql({example: 'tweets example'});
      expect(newState.leaderboardReducer).to.eql({example: 'board example'});
      expect(newState.userReducer).to.eql({example: 'user example'});
    });
  });

});
