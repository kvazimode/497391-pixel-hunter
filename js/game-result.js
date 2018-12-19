import getAnswerType from './get-answer-type';

export default (state) => {
  const result = {
    isFail: state.life === 0,
    correct: 0,
    fast: 0,
    slow: 0,
    total: 0
  }
  getAnswerType(state).forEach((answer) => {
    if (answer !== `wrong`) {
      result[answer] += 1;
    }
  })
  result.total += (result.fast + state.life) * state.settings.EXTRA_POINT;
  result.total -= result.slow * state.settings.EXTRA_POINT;
  result.total += result.correct * state.settings.NORMAL_POINT;
  return result;
}