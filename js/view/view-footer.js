import ViewAbstract from './view-abstract';
import getAnswerType from './../data/get-answer-type';

export default class ViewFooter extends ViewAbstract {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const answerLine = getAnswerType(this.state).map((answer) => {
      return `<li class="stats__result stats__result--${answer}"></li>`;
    });

    return `
    <ul class="stats">
      ${answerLine.join(``)}
    </ul>`;
  }
}
