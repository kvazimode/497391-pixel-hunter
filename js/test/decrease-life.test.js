import decreaseLife from './../data/decrease-life';
import state from './../data/game-state';
import {assert} from 'chai';

describe(`Life setter check`, () => {
  it(`should reset number of lifes`, () => {
    assert.equal(decreaseLife(decreaseLife(state), true).life, 3);
    assert.equal(state.life, 3);
  });
  it(`should decrease number of lifes`, () => {
    assert.equal(decreaseLife(state).life, 2);
    assert.equal(decreaseLife(decreaseLife(state)).life, 1);
    assert.equal(decreaseLife(state).life, 2);
    assert.equal(state.life, 3);
  });
});
