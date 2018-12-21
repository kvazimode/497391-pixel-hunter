import ViewAbstract from './view-abstract';

export default class ViewTwoPic extends ViewAbstract {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const task = this.state.tasks[this.state.level];
    return `
    <section class="game">
      <p class="game__task">${task.question}</p>
      <form class="game__content">
        <div class="game__option">
          <img src="${task.answers[0].image.url}" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${task.answers[1].image.url}" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="visually-hidden" name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>`;
  }

  bind() {
    const form = this.el.querySelector(`.game__content`);
    const formButtons = form.querySelectorAll(`.visually-hidden`);
    let leftPicRadioSelected = ``;
    let rightPicRadioselected = ``;
    const radioClick = (evt) => {
      evt.preventDefault();
      if (evt.currentTarget.name === `question1`) {
        leftPicRadioSelected = evt.currentTarget.value;
      } else {
        rightPicRadioselected = evt.currentTarget.value;
      }
      if (leftPicRadioSelected && rightPicRadioselected) {
        const correct = [leftPicRadioSelected, rightPicRadioselected];
        this.clickAction(correct);
      }
    };
    formButtons.forEach((button) => button.addEventListener(`click`, radioClick));
  }

  clickAction() {}
}
