import ViewAbstract from './view-abstract';
const TYPE = {
  lives: `Бонус за жизни`,
  fast: `Бонус за скорость`,
  slow: `Штраф за медлительность`
};

export default class ViewRow extends ViewAbstract {
  constructor(amount, points, type) {
    super();
    this.amount = amount;
    this.points = points;
    this.type = type;
  }

  get template() {
    return `
    <tr>
      <td></td>
      <td class="result__extra">${TYPE[this.type]}:</td>
      <td class="result__extra">${this.amount} <span class="stats__result stats__result--${this.type}"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${this.points}</td>
    </tr>`;
  }
}
