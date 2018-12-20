import updateState from './../data/update-state';

export default {
  formTemplate(task) {
    return `
    <form class="game__content">
      <div class="game__option">
        <img src="${task.pictures[0]}" alt="Option 1" width="468" height="458">
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
        <img src="${task.pictures[1]}" alt="Option 2" width="468" height="458">
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
  },
  formListener(el, state, callback) {
    const form = el.querySelector(`.game__content`);
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
        updateState(state, correct, callback);
      }
    };
    formButtons.forEach((button) => button.addEventListener(`click`, radioClick));
  }
};
