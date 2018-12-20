import setLevel from './set-level';
import decreaseLife from './decrease-life';
import {compareAnswers} from './../util';

export default (state, correct, callback) => {
  let nextState = setLevel(state, state.level + 1);
  if (!compareAnswers(correct, state.tasks[state.level].correct)) {
    nextState = decreaseLife(nextState);
  }
  nextState.tasks[state.level].answer = correct;
  nextState.tasks[state.level].time = state.time;
  callback(nextState);
};
