import getAnswerType from './../data/get-answer-type';
import ViewFooter from './../view/view-footer';

export default (state) => {
  const answerLine = [];
  getAnswerType(state).forEach((answer) => {
    answerLine.push(`<li class="stats__result stats__result--${answer}"></li>`);
  });
  const viewFooter = new ViewFooter(answerLine);
  return viewFooter.el;
};
