import {render, enableBackButton} from './../util';
import gameResult from './../data/game-result';
import screenStatRecord from './screen-stat-record';
const text = {
  WIN: `Победа!`,
  FAIL: `Поражение`
};

const title = (result) => {
  return result.isFail ? text.FAIL : text.WIN;
};

export default (state) => {
  const result = gameResult(state);
  const temp = `
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
      ${screenStatRecord(state, result)}  
    </section>
  `;
  const statScreen = render(temp);
  enableBackButton(statScreen);
  return statScreen;
};
