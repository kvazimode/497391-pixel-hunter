import ViewAbstract from './view-abstract';

export default class ViewStatRecordNormal extends ViewAbstract {
  constructor(points) {
    super();
    this.points = points;
  }

  get template() {
    return `
      <td class="result__points">× 100</td>
      <td class="result__total">${this.points}</td>
    </tr>`;
  }
}
