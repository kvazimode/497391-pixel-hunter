import decreaseTime from './../data/decrease-time';
import state from './../data/game-state';
import {assert} from 'chai';

describe(`Time setter check`, () => {
  it(`should decrease time by 1`, () => {
    assert.equal(decreaseTime(state).time, 29);
    assert.equal(decreaseTime(state).time, 29);
    assert.equal(state.time, 30);
  });
});
