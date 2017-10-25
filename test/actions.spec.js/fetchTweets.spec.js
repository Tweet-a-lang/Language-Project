import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchTweets, {
  fetchTweetsRequest,
  fetchTweetsSuccess,
  fetchTweetsFailure
} from '../../src/actions/fetchTweets';

const API_URL = 'https://northcoders-news-api.herokuapp.com/api';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchTweets async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('fetchTweetsSuccess', () => {
    it('dispatches FETCH_TWEETS_SUCCESS when fetching tweets. Responds with 200 and data', () => {
      nock(API_URL)
        .get('/articles')
        .reply(200, { articles: [1, 2, 3] });

      const expectedActions = [
        fetchTweetsRequest(),
        fetchTweetsSuccess([1, 2, 3])
      ];

      const store = mockStore();

      return store.dispatch(fetchTweets())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    describe('fetchTweetsFailure', () => {
      it('dispatches FETCH_TWEETS_FAILURE when fetching tweets. Responds with an error', () => {
        nock(API_URL)
          .get('/articles')
          .replyWithError({'message': 'error'});

        const expectedActions = [
          fetchTweetsRequest(),
          fetchTweetsFailure('error')
        ];

        const store = mockStore();

        return store.dispatch(fetchTweets())
          .then(() => {
            expect(store.getActions()).to.eql(expectedActions);
          });
      });
    });
  });
});