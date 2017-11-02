import { expect } from 'chai';
import { persistRehydrate } from '../../src/actions/persistRehydrate';
import * as types from '../../src/actions/types';


describe('persistRehydrate action creator', () => {
  it('adds the state to the payload', () => {
    expect(persistRehydrate({userData: {example: 'example'}, gameData: {example: 'example'}})).to.eql({
      type: types.PERSIST_REHYDRATE,
      payload: {userData: {example: 'example'}, gameData: {example: 'example'}}
    });
  });
});