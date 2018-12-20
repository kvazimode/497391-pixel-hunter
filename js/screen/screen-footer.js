import getAnswerType from './../data/get-answer-type';

export default (state) => {
  const answerLine = getAnswerType(state).map((answer) => {
    return `<li class="stats__result stats__result--${answer}"></li>`;
  });
  const temp = `
      <ul class="stats">
        ${answerLine.join(``)}
      </ul>
    </section>`;
  return temp;
};
