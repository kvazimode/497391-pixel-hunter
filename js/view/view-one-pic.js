import ViewAbstract from './view-abstract';

export default class ViewOnePic extends ViewAbstract {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const task = this.state.tasks[this.state.level];
    return `
    <section class="game">
      <p class="game__task">${task.question}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${task.answers[0].image.url}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="visually-hidden" name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>`;
  }

  bind() {
    const form = this.el.querySelector(`.game__content`);
    const formButtons = form.querySelectorAll(`.visually-hidden`);
    const radioClick = (evt) => {
      evt.preventDefault();
      const correct = [];
      if (evt.target.value === `paint`) {
        correct.push(`painting`);
      } else {
        correct.push(`photo`);
      }
      this.clickAction(correct);
    };
    formButtons.forEach((button) => button.addEventListener(`click`, radioClick));
  }

  clickAction() {}
}
