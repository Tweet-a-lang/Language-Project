import { expect } from 'chai';
import leaderboardReducer, { initialState } from '../../src/reducers/leaderboardReducer';
import {
  fetchLeaderboardRequest,
  fetchLeaderboardSuccess,
  fetchLeaderboardFailure
} from '../../src/actions/fetchLeaderboard';


describe('leaderboard reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'whatever' };
      const newState = leaderboardReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = { type: 'whatever' };
      const newState = leaderboardReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('handles FETCH_LEADERBOARD_REQUEST', () => {
    const action = fetchLeaderboardRequest();
    const newState = leaderboardReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.leaderboardData).to.eql([]);
  });
  it('handles FETCH_LEADERBOARD_SUCCESS', () => {
    const prevState = leaderboardReducer(undefined, fetchLeaderboardRequest());
    const data = [1, 2, 3];
    const action = fetchLeaderboardSuccess(data);
    const newState = leaderboardReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.leaderboardData).to.eql(data);
  });
  it('handles FETCH_LEADERBOARD_FAILURE', () => {
    const prevState = leaderboardReducer(undefined, fetchLeaderboardRequest());
    const error = 'Something went wrong';
    const action = fetchLeaderboardFailure(error);
    const newState = leaderboardReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.leaderboardData).to.eql([]);
  });
});