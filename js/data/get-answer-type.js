import {compareAnswers} from './../util';
const answer = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  SLOW: `slow`,
  FAST: `fast`,
  UNKNOWN: `unknown`
};

export default (state) => {
  const arr = [];
  for (const task of state.tasks) {
    let answerType = answer.UNKNOWN;
    if (task.answer && compareAnswers(task.answer, task.answers)) {
      answerType = answer.CORRECT;
      if (task.time && task.time < state.settings.FAST) {
        answerType = answer.FAST;
      } else if (task.time && task.time > state.settings.SLOW) {
        answerType = answer.SLOW;
      }
    } else if (task.answer && !compareAnswers(task.answer, task.answers)) {
      answerType = answer.WRONG;
    }
    arr.push(answerType);
  }
  return arr;
};
