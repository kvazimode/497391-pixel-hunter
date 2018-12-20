import ViewAbstract from './view-abstract';
import gameResult from './../data/game-result';
import screenStatRecord from './../screen/screen-stat-record';

export default class ViewFooter extends ViewAbstract {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const result = gameResult(this.state);
    const title = (res) => {
      return res.isFail ? `Поражение` : `Победа!`;
    };

    return `
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
    </header>
    <section class="result">
    <h2 class="result__title">${title(result)}</h2>
      ${screenStatRecord(this.state, result)}  
    </section>`;
  }
}
