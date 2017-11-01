import { expect } from 'chai';
import { saveTopic } from '../../src/actions/saveTopic';
import * as types from '../../src/actions/types';


describe('saveTopic action creators', () => {
  it('adds the topic to the payload', () => {
    expect(saveTopic('news')).to.eql({
      type: types.SAVE_TOPIC,
      payload: 'news'
    });
  });
});