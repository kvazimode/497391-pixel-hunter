import ViewAbstract from './view-abstract';
const TYPE = {
  lives: `Бонус за жизни`,
  fast: `Бонус за скорость`,
  slow: `Штраф за медлительность`
};

export default class ViewExtraRow extends ViewAbstract {
  constructor(lifes, fast, slow, points) {
    super();
    this.lifes = lifes;
    this.fast = fast;
    this.slow = slow;
    this.points = points;
  }

  get template() {
    let temp = ``;
    if (this.lifes) {
      temp += this.getRowTemplate(`lives`, this.lifes);
    }
    if (this.fast) {
      temp += this.getRowTemplate(`fast`, this.fast);
    }
    if (this.slow) {
      temp += this.getRowTemplate(`slow`, this.slow);
    }
    return temp;
  }
  getRowTemplate(type, amount) {
    return `
      <tr>
        <td></td>
        <td class="result__extra">${TYPE[type]}:</td>
        <td class="result__extra">${amount} <span class="stats__result stats__result--${type}"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${amount * this.points}</td>
      </tr>`;
  }
}
