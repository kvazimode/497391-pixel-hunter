import getAnswerType from './get-answer-type';

export default (state) => {
  const answerLine = [];
  getAnswerType(state).forEach((answer) => {
    answerLine.push(`<li class="stats__result stats__result--${answer}"></li>`);
  })
  const temp = `
      <ul class="stats">
        ${answerLine.join(``)}
      </ul>
    </section>`;
  return temp;
};