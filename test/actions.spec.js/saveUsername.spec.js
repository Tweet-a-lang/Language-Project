import { expect } from 'chai';
import { saveUsername } from '../../src/actions/saveUsername';
import * as types from '../../src/actions/types';


describe('saveUsername action creator', () => {
  it('adds the username to the payload', () => {
    expect(saveUsername('kerry')).to.eql({
      type: types.SAVE_USERNAME,
      payload: 'kerry'
    });
  });
});