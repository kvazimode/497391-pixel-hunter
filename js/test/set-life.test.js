import {setLife} from './../set-life';
import state from './../game-state';
import {assert} from 'chai';

describe(`Life setter check`, () => {
  it(`should reset number of lives`, () => {
    assert.equal(setLife(state).life, 2);
    assert.equal(setLife(state, true).life, 3);
    assert.equal(state.life, 3);
  });
  it(`should decrease number of lifes`, () => {
    assert.equal(setLife(state).life, 2);
    assert.equal(setLife(state).life, 1);
    assert.equal(setLife(state).life, 0);
  });
});
