import ViewAbstract from './view-abstract';

export default class ViewStatRecordFail extends ViewAbstract {
  constructor() {
    super();
  }

  get template() {
    return `<td class="result__points"></td>`;
  }
}
