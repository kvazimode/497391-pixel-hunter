import ViewAbstract from './view-abstract';

export default class ViewRules extends ViewAbstract {
  constructor() {
    super();
  }

  get template() {
    return `
    <section class="rules">
      <h2 class="rules__title">Правила</h2>
      <ul class="rules__description">
        <li>Угадай 10 раз для каждого изображения фото
          <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
          <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
        <li>Фотографиями или рисунками могут быть оба изображения.</li>
        <li>На каждую попытку отводится 30 секунд.</li>
        <li>Ошибиться можно не более 3 раз.</li>
      </ul>
      <p class="rules__ready">Готовы?</p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </section>`;
  }

  bind() {
    const submitButton = this.el.querySelector(`.rules__button`);
    const nameInput = this.el.querySelector(`.rules__input`);
    nameInput.addEventListener(`input`, () => {
      submitButton.disabled = !nameInput.value;
    });
    submitButton.addEventListener(`click`, () => this.clickAction(nameInput.value));
  }

  clickAction() {}
}
