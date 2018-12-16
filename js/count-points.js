const FAST = 10; // sec
const SLOW = 20;
const NORMAL_POINT = 100;
const EXTRA_POINT = 50;

export default (answers, lives) => {
  if(answers.length < 10 || answers.length > 10 || lives <= 0) {
    return -1;
  }
  return answers.reduce((sum, answer) => {
    if (!answer.result) {
      return sum;
    }
    if (answer.time <= FAST) {
      sum += EXTRA_POINT;
    } else if (answer.time > SLOW) {
      sum -= EXTRA_POINT;
    }
    return sum + NORMAL_POINT;
  }, EXTRA_POINT * lives);
};