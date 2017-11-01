import { expect } from 'chai';
import { updateVocab } from '../../src/actions/updateVocab';
import * as types from '../../src/actions/types';


describe('updateVocab action creator', () => {
  it('adds the correct language pair to the payload', () => {
    expect(updateVocab({Spanish: 'Hola', English: 'Hello'})).to.eql({
      type: types.UPDATE_VOCAB,
      payload: [{Spanish: 'Hola', English: 'Hello'}]
    });
  });
});