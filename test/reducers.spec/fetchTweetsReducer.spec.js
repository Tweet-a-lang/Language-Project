import { expect } from 'chai';
import fetchTweetsReducer, { initialState } from '../../src/reducers/fetchTweetsReducer';
import {
    fetchTweetsRequest,
    fetchTweetsSuccess,
    fetchTweetsFailure
} from '../../src/actions/fetchTweets';


describe('fetchTweets reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed previous state if an unrecognised action is passed', () => {
            const action = { type: 'whatever' };
            const newState = fetchTweetsReducer(initialState, action);
            expect(newState).to.equal(initialState);
        });
        it('uses the initial state if no previous state is passed', () => {
            const action = { type: 'whatever' };
            const newState = fetchTweetsReducer(undefined, action);
            expect(newState).to.equal(initialState);
        });
    });
    it('handles FETCH_TWEETS_REQUEST', () => {
        const action = fetchTweetsRequest();
        const newState = fetchTweetsReducer(undefined, action);
        expect(newState.loading).to.be.true;
        expect(newState.error).to.be.null;
        expect(newState.data).to.eql([]);
    });
    it('handles FETCH_TWEETS_SUCCESS', () => {
        const prevState = fetchTweetsReducer(undefined, fetchTweetsRequest());
        const data = [1, 2, 3];
        const action = fetchTweetsSuccess(data);
        const newState = fetchTweetsReducer(prevState, action);
        expect(newState.loading).to.be.false;
        expect(newState.error).to.be.null;
        expect(newState.data).to.eql(data);
    });
    it('handles FETCH_TWEETS_FAILURE', () => {
        const prevState = fetchTweetsReducer(undefined, fetchTweetsRequest());
        const error = 'Something went wrong';
        const action = fetchTweetsFailure(error);
        const newState = fetchTweetsReducer(prevState, action);
        expect(newState.loading).to.be.false;
        expect(newState.error).to.eql(error);
        expect(newState.data).to.eql([]);
    });
});