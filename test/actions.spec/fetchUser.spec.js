import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchUser, {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../../src/actions/fetchUser';

const API_URL = 'http://192.168.100.33:3001/api';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchUser async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('fetchUserSuccess', () => {
    it('dispatches FETCH_USER_SUCCESS when fetching user details. Responds with 200 and data', () => {
      nock(API_URL)
        .get('/user/rosie')
        .reply(200, [1, 2, 3]);

      const expectedActions = [
        fetchUserRequest(),
        fetchUserSuccess([1, 2, 3])
      ];
    
      const store = mockStore();

      return store.dispatch(fetchUser('rosie'))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    describe('fetchUserFailure', () => {
      it('dispatches FETCH_USER_FAILURE when fetching user details. Responds with an error', () => {
        nock(API_URL)
          .get('/user/rosie')
          .replyWithError({ 'message': 'error' });

        const expectedActions = [
          fetchUserRequest(),
          fetchUserFailure('error')
        ];

        const store = mockStore();

        return store.dispatch(fetchUser('rosie'))
          .then(() => {
            expect(store.getActions()).to.eql(expectedActions);
          });
      });
    });
  });
});