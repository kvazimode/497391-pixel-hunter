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
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${task.answers[0].image.url}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${task.answers[1].image.url}" alt="Option 2" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${task.answers[2].image.url}" alt="Option 3" width="304" height="455">
        </div>
      </form>`;
  }

  bind() {
    const form = this.el.querySelector(`.game__content`);
    const picList = form.querySelectorAll(`.game__option`);
    const picClick = (evt) => {
      evt.preventDefault();
      const correct = evt.currentTarget.firstElementChild.src;
      this.clickAction(this.state, correct);
    };
    picList.forEach((pic) => pic.addEventListener(`click`, picClick));
  }

  clickAction() {}
}
