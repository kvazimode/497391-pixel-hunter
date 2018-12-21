import ViewAbstract from './view-abstract';

export default class ViewStat extends ViewAbstract {
  constructor(isFail, title, answerLine, points, extraRow, totalPoints) {
    super();
    this.isFail = isFail;
    this.title = title;
    this.answerLine = answerLine;
    this.points = points;
    this.extraRow = extraRow;
    this.totalPoints = totalPoints;
  }

  get template() {
    const winTemplate = `
      <section class="result">
        <h2 class="result__title">${this.title}</h2>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2">${this.answerLine}</td>
            <td class="result__points">× 100</td>
            <td class="result__total">${this.points}</td>
          </tr>
          ${this.extraRow}
          <tr>
            <td colspan="5" class="result__total  result__total--final">${this.totalPoints}</td>
          </tr>
        </table>
      </section>`;
    const failTemplate = `
      <section class="result">
        <h2 class="result__title">${this.title}</h2>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td>${this.answerLine}</td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr> 
        </table>
      </section>`;
    const template = `
    <header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
    </header>`;
    return this.isFail ? template + failTemplate : template + winTemplate;
  }
}
