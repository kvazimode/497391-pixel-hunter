import getAnswerType from './../data/get-answer-type';
import ViewFooter from './../view/view-footer';

export default (state) => {
  const answerLine = getAnswerType(state).map((answer) => {
    return `<li class="stats__result stats__result--${answer}"></li>`;
  });
  const viewFooter = new ViewFooter(answerLine);
  return viewFooter.el;
};
