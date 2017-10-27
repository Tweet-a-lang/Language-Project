import { expect } from 'chai';
import userReducer, { initialState } from '../../src/reducers/userReducer';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../../src/actions/fetchUser';
import { increaseScore, decreaseScore, updateUserScore } from '../../src/actions/updateScore';


describe('fetchUser reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'whatever' };
      const newState = fetchUserReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = { type: 'whatever' };
      const newState = fetchUserReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('handles FETCH_USER_REQUEST', () => {
    const action = fetchUserRequest();
    const newState = fetchUserReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql({});
  });
  it('handles FETCH_USER_SUCCESS', () => {
    const prevState = fetchUserReducer(undefined, fetchUserRequest());
    const data = [1, 2, 3];
    const action = fetchUserSuccess(data);
    const newState = fetchUserReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql(data);
  });
  it('handles FETCH_USER_FAILURE', () => {
    const prevState = fetchUserReducer(undefined, fetchUserRequest());
    const error = 'Something went wrong';
    const action = fetchUserFailure(error);
    const newState = fetchUserReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.userData).to.eql({});
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