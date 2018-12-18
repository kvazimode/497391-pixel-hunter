import gameType from './game-type';

export default (state) => {
  const task = state.tasks[state.level];
  const type = task.template;

  return `
  <section class="game">
    <p class="game__task">${task.text}</p>
    ${gameType[type].formTemplate(task)}`;
};
