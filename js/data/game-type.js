import setLevel from './set-level';
import decreaseLife from './decrease-life';
import {compareAnswers} from './../util';

const updateState = (state, correct, callback) => {
  let nextState = setLevel(state, state.level + 1);
  if (!compareAnswers(correct, state.tasks[state.level].correct)) {
    nextState = decreaseLife(nextState);
  }
  nextState.tasks[state.level].answer = correct;
  nextState.tasks[state.level].time = state.time;
  callback(nextState);
};

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
        evt.preventDefault();
        const correct = evt.target.value;
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
      }
      formButtons.forEach((button) => button.addEventListener(`click`, radioClick));
    }
  },
  threePic: {
    formTemplate(task) {
      return `
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${task.pictures[0]}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${task.pictures[1]}" alt="Option 2" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${task.pictures[2]}" alt="Option 3" width="304" height="455">
        </div>
      </form>`
    },
    formListener(el, state, callback) {
      const form = el.querySelector(`.game__content`);
      const picList = form.querySelectorAll(`.game__option`);
      const picClick = (evt) => {
        evt.preventDefault();
        const correct = evt.currentTarget.firstElementChild.src;
        updateState(state, correct, callback);
      }
      picList.forEach((pic) => pic.addEventListener(`click`, picClick));
    }
  }
}