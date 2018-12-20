import getGameScreen from './../data/get-game-screen';

export default (state) => {
  const task = state.tasks[state.level];
  const type = task.template;
  const gameForm = getGameScreen(type);

  return `
  <section class="game">
    <p class="game__task">${task.text}</p>
    ${gameForm.formTemplate(task)}`;
};
