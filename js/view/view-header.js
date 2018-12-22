import ViewAbstract from './view-abstract';
import App from './../app';

export default class ViewHeader extends ViewAbstract {
  constructor(state = null) {
    super();
    this.state = state;
  }

  get template() {
    const getTimeLife = (state) => {
      return `<div class="game__timer">${state.time}</div>
      <div class="game__lives">
        ${new Array(state.settings.MAX_LIFE - state.life)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`)
        .join(``)}
        ${new Array(state.life)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
        .join(``)}
      </div>`;
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
        ${this.state ? getTimeLife(this.state) : ``}
      </header>`;
  }

  bind() {
    if (this.state !== null) {
      this.blinker = this.el.querySelector(`.game__timer`);
    }
    const backButton = this.el.querySelector(`.back`);
    backButton.addEventListener(`click`, () => this.clickAction());
  }

  blink() {
    if (this.blinker) {
      if (!this.blinker.style.color) {
        this.blinker.style.color = `red`;
      } else {
        this.blinker.removeAttribute(`style`);
      }
    }
  }

  clickAction() {
    App.showModalConfirm();
  }
}
