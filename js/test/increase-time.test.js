import increaseTime from '../increase-time';
import state from '../game-state';
import {assert} from 'chai';

describe(`Time setter check`, () => {
  it(`should reset time`, () => {
    assert.equal(increaseTime(state).time, 1);
    assert.equal(increaseTime(increaseTime(state), true).time, 0);
    assert.equal(state.time, 0);
  });
  it(`should increase time by 1`, () => {
    assert.equal(increaseTime(state).time, 1);
    assert.equal(increaseTime(state).time, 1);
    assert.equal(state.time, 0);
  });
});
