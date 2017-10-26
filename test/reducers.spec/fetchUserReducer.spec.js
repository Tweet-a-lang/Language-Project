import { expect } from 'chai';
import fetchUserReducer, { initialState } from '../../src/reducers/fetchUserReducer';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../../src/actions/fetchUser';


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
});