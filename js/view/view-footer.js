import ViewAbstract from './view-abstract';

export default class ViewFooter extends ViewAbstract {
  constructor(answerLine) {
    super();
    this.answerLine = answerLine;
  }

  get template() {
    return `
    <ul class="stats">
      ${this.answerLine.join(``)}
    </ul>
  </section>`;
  }
}