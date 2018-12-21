import ViewAbstract from './view-abstract';

export default class ViewStatRecordStart extends ViewAbstract {
  constructor() {
    super();
  }

  get template() {
    return `
    <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">`;
  }
}
