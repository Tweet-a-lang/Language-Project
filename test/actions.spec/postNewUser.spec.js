import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import postNewUser, {
  postNewUserRequest,
  postNewUserSuccess,
  postNewUserFailure
} from '../../src/actions/postNewUser';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('postNewUser async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('postNewUserSuccess', () => {
    it('dispatches POST_NEW_USER_SUCCESS when posting a new user to the database. Responds with 200 and all new data', () => {
      nock(API_URL)
        .post('/user', {name: 'rosie'})
        .reply(200, {name: 'rosie', score: 0, completedTweets: []});

      const expectedActions = [
        postNewUserRequest(),
        postNewUserSuccess({name: 'rosie', score: 0, completedTweets: []})
      ];

      const store = mockStore();
      
      return store.dispatch(postNewUser('rosie'))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    describe('postNewUserFailure', () => {
      it('dispatches POST_NEW_USER_FAILURE when posting a new user to the database. Responds with an error', () => {
        nock(API_URL)
          .post('/user', {name: 'rosie'})
          .replyWithError({ 'message': 'error' });

        const expectedActions = [
          postNewUserRequest(),
          postNewUserFailure('error')
        ];

        const store = mockStore();

        return store.dispatch(postNewUser('rosie'))
          .then(() => {
            expect(store.getActions()).to.eql(expectedActions);
          });
      });
    });
  });
});