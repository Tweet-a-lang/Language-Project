import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchLeaderboard, {
  fetchLeaderboardRequest,
  fetchLeaderboardSuccess,
  fetchLeaderboardFailure
} from '../../src/actions/fetchLeaderboard';

const API_URL = 'http://192.168.100.33:3001/api';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchLeaderboard async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('fetchLeaderboardSuccess', () => {
    it('dispatches FETCH_LEADERBOARD_SUCCESS when fetching the scoreboard data. Responds with 200 and data', () => {
      nock(API_URL)
        .get('/scoreboard')
        .reply(200, [1, 2, 3]);

      const expectedActions = [
        fetchLeaderboardRequest(),
        fetchLeaderboardSuccess([1, 2, 3])
      ];
    
      const store = mockStore();

      return store.dispatch(fetchLeaderboard())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    describe('fetchLeaderboardFailure', () => {
      it('dispatches FETCH_LEADERBOARD_FAILURE when fetching user details. Responds with an error', () => {
        nock(API_URL)
          .get('/scoreboard')
          .replyWithError({ 'message': 'error' });

        const expectedActions = [
          fetchLeaderboardRequest(),
          fetchLeaderboardFailure('error')
        ];

        const store = mockStore();

        return store.dispatch(fetchLeaderboard())
          .then(() => {
            expect(store.getActions()).to.eql(expectedActions);
          });
      });
    });
  });
});