import setLevel from './../data/set-level';
import state from './../data/game-state';
import {assert} from 'chai';

describe(`Level setter check`, () => {
  it(`should set level`, () => {
    assert.equal(setLevel(state, 0).level, 0);
  });
  it(`should not set level more than available`, () => {
    assert.equal(setLevel(state, 11).level, -1);
  });
  it(`should not set level lower than 0`, () => {
    assert.equal(setLevel(state, -20).level, -1);
  });
  it(`should not process corner cases`, () => {
    assert.equal(setLevel(state, null).level, -1);
    assert.equal(setLevel(state, undefined).level, -1);
  });
});
