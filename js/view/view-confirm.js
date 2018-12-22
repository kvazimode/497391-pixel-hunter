import ViewAbstract from './view-abstract';
import App from './../app';

export default class ViewConfirm extends ViewAbstract {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="modal">
        <form class="modal__inner">
          <button class="modal__close" type="button">
            <span class="visually-hidden">Закрыть</span>
          </button>
          <h2 class="modal__title">Подтверждение</h2>
          <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
          <div class="modal__button-wrapper">
            <button class="modal__btn  modal__btn--ok">Ок</button>
            <button class="modal__btn  modal__btn--cancel">Отмена</button>
          </div>
        </form>
      </section>`;
  }

  bind() {
    const closeButton = this.el.querySelector(`.modal__close`);
    const cancelButton = this.el.querySelector(`.modal__btn--cancel`);
    const okButton = this.el.querySelector(`.modal__btn--ok`);

    closeButton.addEventListener(`click`, () => this.closeClickAction());
    cancelButton.addEventListener(`click`, () => this.closeClickAction());
    okButton.addEventListener(`click`, () => this.okClickAction());
  }

  open() {
    document.body.appendChild(this.el);
  }

  close() {
    document.body.removeChild(this.el);
  }

  closeClickAction() {
    this.close();
  }

  okClickAction() {
    this.close();
    App.showGreeting();
  }
}
