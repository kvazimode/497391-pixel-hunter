import ViewAbstract from './view-abstract';
import App from './../app';

export default class ViewIntro extends ViewAbstract {
  constructor() {
    super();
  }

  get template() {
    return `
    <section class="intro">
      <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </section>`;
  }

  bind() {
    const asterisk = this.el.querySelector(`.intro__asterisk`);
    asterisk.addEventListener(`click`, () => this.clickAction());
  }

  clickAction() {
    App.showGreeting();
  }
}
