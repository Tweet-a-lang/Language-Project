import { expect } from 'chai';
import userReducer, { initialState } from '../../src/reducers/userReducer';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../../src/actions/fetchUser';
import { increaseScore, decreaseScore } from '../../src/actions/updateScore';
import { patchUserRequest, patchUserSuccess, patchUserFailure } from '../../src/actions/patchUser';
import { postNewUserRequest, postNewUserSuccess, postNewUserFailure } from '../../src/actions/postNewUser';


describe('user reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'whatever' };
      const newState = userReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = { type: 'whatever' };
      const newState = userReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('handles FETCH_USER_REQUEST', () => {
    const action = fetchUserRequest();
    const newState = userReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql({});
  });
  it('handles FETCH_USER_SUCCESS', () => {
    const prevState = userReducer(undefined, fetchUserRequest());
    const data = [1, 2, 3];
    const action = fetchUserSuccess(data);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql(data);
  });
  it('handles FETCH_USER_FAILURE', () => {
    const prevState = userReducer(undefined, fetchUserRequest());
    const error = 'Something went wrong';
    const action = fetchUserFailure(error);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.userData).to.eql({});
  });
  describe('actions::INCREASE_SCORE', () => {
    it('increases the score', () => {
      let action = increaseScore(10);
      let newState = userReducer(initialState, action);
      expect(newState.userData.score).to.eql(10);
    });
  });
  describe('actions::DECREASE_SCORE', () => {
    it('decreases the score', () => {
      let action = decreaseScore(2);
      let newState = userReducer(initialState, action);
      expect(newState.userData.score).to.eql(8);
    });
  });
  it('handles PATCH_USER_REQUEST', () => {
    const action = patchUserRequest();
    const newState = userReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql(initialState.userData);
  });
  it('handles PATCH_USER_SUCCESS', () => {
    const prevState = userReducer(undefined, patchUserRequest());
    const data = [1, 2, 3];
    const action = patchUserSuccess(data);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql(data);
  });
  it('handles PATCH_USER_FAILURE', () => {
    const prevState = userReducer(undefined, patchUserRequest());
    const error = 'Something went wrong';
    const action = patchUserFailure(error);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.userData).to.eql(initialState.userData);
  });
  it('handles POST_NEW_USER_REQUEST', () => {
    const action = postNewUserRequest('rosie');
    const newState = userReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql(initialState.userData);
  });
  it('handles POST_NEW_USER_SUCCESS', () => {
    const prevState = userReducer(undefined, postNewUserRequest());
    const data = [1, 2, 3];
    const action = postNewUserSuccess(data);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql(data);
  });
  it('handles POST_NEW_USER_FAILURE', () => {
    const prevState = userReducer(undefined, postNewUserRequest());
    const error = 'Something went wrong';
    const action = postNewUserFailure(error);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.userData).to.eql(initialState.userData);
  });
});