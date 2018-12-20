import updateState from './../data/update-state';

export default {
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
    </form>`;
  },
  formListener(el, state, callback) {
    const form = el.querySelector(`.game__content`);
    const picList = form.querySelectorAll(`.game__option`);
    const picClick = (evt) => {
      evt.preventDefault();
      const correct = evt.currentTarget.firstElementChild.src;
      updateState(state, correct, callback);
    };
    picList.forEach((pic) => pic.addEventListener(`click`, picClick));
  }
};
