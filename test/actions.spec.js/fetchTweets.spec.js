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

describe('async action creators', () => {
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
    // it('dispatches FETCH_ALL_ARTICLES_FAILURE when fetching articles reponds with an error', () => {
    //   nock(API_URL)
    //     .get('/articles')
    //     .replyWithError({'message': 'error'});

    //   const expectedActions = [
    //     fetchArticlesRequest(),
    //     fetchArticlesFailure('error')
    //   ];

    //   const store = mockStore();

    //   return store.dispatch(fetchArticles())
    //     .then(() => {
    //       expect(store.getActions()).to.eql(expectedActions);
    //     });
    // });
  });
});