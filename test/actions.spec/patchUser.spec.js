import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import patchUser, {
  patchUserRequest,
  patchUserSuccess,
  patchUserFailure
} from '../../src/actions/patchUser';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('patchUser async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('patchUserSuccess', () => {
    it('dispatches PATCH_USER_SUCCESS when patching user score and completed tweets. Responds with 200 and all new data', () => {
      nock(API_URL)
        .patch('/user/rosie', {score: 10, completedTweets: [1,2,3]})
        .reply(200, {score: 10, completedTweets: [1,2,3]});

      const expectedActions = [
        patchUserRequest(),
        patchUserSuccess({score: 10, completedTweets: [1,2,3]})
      ];

      const store = mockStore();
      
      return store.dispatch(patchUser('rosie', 10, [1,2,3]))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    describe('patchUserFailure', () => {
      it('dispatches PATCH_USER_FAILURE when patching user score and completed tweets. Responds with an error', () => {
        nock(API_URL)
          .patch('/user/rosie', {score: 10, completedTweets: [1,2,3]})
          .replyWithError({ 'message': 'error' });

        const expectedActions = [
          patchUserRequest(),
          patchUserFailure('error')
        ];

        const store = mockStore();

        return store.dispatch(patchUser('rosie', 10, [1,2,3]))
          .then(() => {
            expect(store.getActions()).to.eql(expectedActions);
          });
      });
    });
  });
});