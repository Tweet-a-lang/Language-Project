import { expect } from 'chai';
import { persistRehydrate } from '../../src/actions/persistRehydrate';
import * as types from '../../src/actions/types';


describe('persistRehydrate action creator', () => {
  it('adds the state to the payload', () => {
    expect(persistRehydrate({fetchTweetsReducer: {example: 'example'}, leaderboardReducer: {example: 'example'}, userReducer: {example: 'example'}})).to.eql({
      type: types.PERSIST_REHYDRATE,
      payload: {fetchTweetsReducer: {example: 'example'}, leaderboardReducer: {example: 'example'}, userReducer: {example: 'example'}}
    });
  });
});