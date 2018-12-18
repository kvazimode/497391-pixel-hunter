import setLevel from './set-level';
import decreaseLife from './decrease-life';

const updateState = (state, correct, callback) => {
  let nextState = setLevel(state, state.level + 1);
  if (!correct) {
    nextState = decreaseLife(nextState);
  }
  nextState.tasks[state.level].answer = +correct;
  nextState.tasks[state.level].time = state.time;
  callback(nextState);
}

export default {
  onePic: {
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
        const correct = evt.target.value === state.tasks[state.level].correct;
        updateState(state, correct, callback);
      }
      formButtons.forEach((button) => button.addEventListener(`click`, radioClick));
    }
  },
  twoPic: {
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
      
    }
  },
  threePic: {

  }
}