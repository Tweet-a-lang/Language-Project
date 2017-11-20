import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchTweets, {
  fetchTweetsRequest,
  fetchTweetsSuccess,
  fetchTweetsFailure
} from '../../src/actions/fetchTweets';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchTweets async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('fetchTweetsSuccess', () => {
    it('dispatches FETCH_TWEETS_SUCCESS when fetching tweets. Responds with 200 and data', () => {
      nock(API_URL)
        .get('/tweets/rosie')
        .reply(200, [1, 2, 3]);

      const expectedActions = [
        fetchTweetsRequest(),
        fetchTweetsSuccess([1, 2, 3])
      ];
    
      const store = mockStore();

      return store.dispatch(fetchTweets('rosie'))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    describe('fetchTweetsFailure', () => {
      it('dispatches FETCH_TWEETS_FAILURE when fetching tweets. Responds with an error', () => {
        nock(API_URL)
          .get('/tweets/rosie')
          .replyWithError({ 'message': 'error' });

        const expectedActions = [
          fetchTweetsRequest(),
          fetchTweetsFailure('error')
        ];

        const store = mockStore();

        return store.dispatch(fetchTweets('rosie'))
          .then(() => {
            expect(store.getActions()).to.eql(expectedActions);
          });
      });
    });
  });
});