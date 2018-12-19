import setLevel from './../set-level';
import state from './../game-state';
import {assert} from 'chai';

describe(`Level setter check`, () => {
  it(`should set level`, () => {
    assert.equal(setLevel(state, 1).level, 1);
    assert.equal(setLevel(state, 4).level, 4);
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