import state from './game-state';
const param = state.settings;

export default (answers, lives) => {
  if(answers.length < 10 || answers.length > 10 || lives <= 0) {
    return -1;
  }
  return answers.reduce((sum, answer) => {
    if (!answer.result) {
      return sum;
    }
    if (answer.time <= param.FAST) {
      sum += param.EXTRA_POINT;
    } else if (answer.time > param.SLOW) {
      sum -= param.EXTRA_POINT;
    }
    return sum + param.NORMAL_POINT;
  }, param.EXTRA_POINT * lives);
};