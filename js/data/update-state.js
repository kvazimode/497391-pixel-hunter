// import setLevel from './set-level';
// import decreaseLife from './decrease-life';
// import {compareAnswers} from './../util';

export default (state, answer, time) => {
  const newState = Object.assign({}, state);
  newState.tasks[state.level].answer = answer;
  newState.tasks[state.level].time = time;
  return newState;
};
