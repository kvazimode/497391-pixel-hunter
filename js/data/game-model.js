import INITIAL_STATE from './game-state';
import setLevel from './set-level';
import decreaseLife from './decrease-life';
import decreaseTime from './decrease-time';
import {compareAnswers} from './../util';

export default class GameModel {
  constructor(data, player) {
    this.data = data;
    this.player = player;
    this.restart();
  }

  get state() {
    return this._state;
  }

  restart() {
    this._state = Object.assign({}, INITIAL_STATE);
    this._state = Object.assign({}, this._state, {tasks: this.data, player: this.player});
  }

  setNextLevel(state) {
    this._state = setLevel(state, state.level + 1);
    this._state = Object.assign({}, this._state, {time: INITIAL_STATE.time});
  }

  decreaseLife() {
    this._state = decreaseLife(this._state, false);
  }

  updateState(state, answer, time) {
    state.tasks[state.level].answer = answer;
    state.tasks[state.level].time = time;
    this.setNextLevel(this._state);
  }

  writeAnswer(answer, time) {
    if (!compareAnswers(answer, this._state.tasks[this._state.level].answers)) {
      this.decreaseLife();
    }
    const timeSpent = INITIAL_STATE.time - time;
    this.updateState(this._state, answer, timeSpent);
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
