import increaseTime from '../increase-time';
import state from '../game-state';
import {assert} from 'chai';

describe(`Time setter check`, () => {
  it(`should increase time by 1`, () => {
    assert.equal(increaseTime(state).time, 16);
    assert.equal(increaseTime(state).time, 16);
    assert.equal(state.time, 15);
  });
});
