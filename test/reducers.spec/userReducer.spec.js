import { expect } from 'chai';
import userReducer, { initialState } from '../../src/reducers/userReducer';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../../src/actions/fetchUser';
import { increaseScore, decreaseScore } from '../../src/actions/updateScore';
import { updateVocab } from '../../src/actions/updateVocab';
import { updateCompletedTweets } from '../../src/actions/updateCompletedTweets';
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
      expect(newState.gameData.score).to.eql(10);
    });
  });
  describe('actions::DECREASE_SCORE', () => {
    it('decreases the score', () => {
      let action = decreaseScore(2);
      let newState = userReducer(initialState, action);
      expect(newState.gameData.score).to.eql(8);
    });
  });
  describe('actions::UPDATE_COMPLETED_TWEETS', () => {
    it('adds the tweets completed in the game to the userData overall completedTweets', () => {
      let action = updateCompletedTweets('1234567890123456');
      let newState = userReducer(initialState, action);
      expect(newState.gameData.completedTweets).to.eql(['1234567890123456']);
    });
  });
  describe('actions::UPDATE_VOCAB', () => {
    it('adds the vocab completed in the game to the gameData', () => {
      let action = updateVocab({ Spanish: 'Hola', English: 'Hello' });
      let newState = userReducer(initialState, action);
      expect(newState.gameData.vocab).to.eql([{ Spanish: 'Hola', English: 'Hello' }]);
    });
  });
  it('handles PATCH_USER_REQUEST', () => {
    const action = patchUserRequest();
    const newState = userReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql(initialState.userData);
    expect(newState.gameData).to.eql(initialState.gameData);
  });
  it('handles PATCH_USER_SUCCESS', () => {
    const prevState = userReducer(undefined, patchUserRequest());
    const data = [1, 2, 3];
    const action = patchUserSuccess(data);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.userData).to.eql(data);
    expect(newState.gameData).to.eql({
      score: 0,
      completedTweets: [],
      vocab: []
    });
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
