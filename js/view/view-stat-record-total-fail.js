import ViewAbstract from './view-abstract';

export default class ViewStatRecordTotalFail extends ViewAbstract {
  constructor() {
    super();
  }

  get template() {
    return `<td class="result__total  result__total--final">fail</td></tr>`;
  }
}
