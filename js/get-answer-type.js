import {compareAnswers} from './util';

export default (state) => {
  const arr = [];
  for (const task of state.tasks) {
    let answerType = `unknown`;
    if (task.answer && compareAnswers(task.answer, task.correct)) {
      answerType = `correct`;
      if (task.time < state.settings.FAST) {
        answerType = `fast`;
      } else if (task.time > state.settings.SLOW) {
        answerType = `slow`;
      }
    } else if (task.answer && !compareAnswers(task.answer, task.correct)) {
      answerType = `wrong`;
    }
    arr.push(answerType);
  }
  return arr;
}