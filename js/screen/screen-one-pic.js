import updateState from './../data/update-state';

export default {
  formTemplate(task) {
    return `
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${task.pictures[0]}" alt="Option 1" width="705" height="455">
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
  },
  formListener(el, state, callback) {
    const form = el.querySelector(`.game__content`);
    const formButtons = form.querySelectorAll(`.visually-hidden`);
    const radioClick = (evt) => {
      evt.preventDefault();
      const correct = evt.target.value;
      updateState(state, correct, callback);
    };
    formButtons.forEach((button) => button.addEventListener(`click`, radioClick));
  }
};
