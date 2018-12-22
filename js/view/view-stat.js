import ViewAbstract from './view-abstract';

export default class ViewStat extends ViewAbstract {
  constructor(i, isFail, title, answerLine, points, extraRow, totalPoints) {
    super();
    this.resultNumber = i;
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
            <td class="result__number">${this.resultNumber + 1}</td>
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
            <td class="result__number">${this.resultNumber + 1}</td>
            <td>${this.answerLine}</td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr> 
        </table>
      </section>`;
    return this.isFail ? failTemplate : winTemplate;
  }
}
