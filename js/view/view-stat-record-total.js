import ViewAbstract from './view-abstract';

export default class ViewStatRecordTotal extends ViewAbstract {
  constructor(totalPoints) {
    super();
    this.totalPoints = totalPoints;
  }

  get template() {
    return `
    <td colspan="5" class="result__total  result__total--final">${this.totalPoints}</td>
  </tr>
  </table>
  </section>`;
  }
}
