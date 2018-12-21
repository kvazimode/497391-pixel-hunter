import INITIAL_STATE from './game-state';
import setLevel from './set-level';
import decreaseLife from './decrease-life';
import decreaseTime from './decrease-time';
import updateState from './update-state';

export default class GameModel {
  constructor(data, player) {
    this.data = data;
    this.player = player;
    this.restart();
  }

  restart() {
    this._state = Object.assign({}, INITIAL_STATE);
    this._state = Object.assign({}, this._state, {tasks: this.data, player: this.player});
  }

  get state() {
    return this._state;
  }

  setNextLevel() {
    this._state = setLevel(this._state, this._state.level + 1);
    this._state = Object.assign({}, this._state, {time: INITIAL_STATE.time})
  }

  decreaseLife() {
    this._state = decreaseLife(this._state, false);
  }

  writeAnswer(answer, time) {
    const timeSpent = INITIAL_STATE.time - time;
    this._state = updateState(this._state, answer, timeSpent);
  }

  tick() {
    this._state = decreaseTime(this._state);
  }

  gameOver() {
    return this._state.life === 0;
  }

  outOfTime() {
    return this._state.time <= 0;
  }
}