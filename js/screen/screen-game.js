import {getGameView} from './../util';

export default (state) => {
  const task = state.tasks[state.level];
  const type = task.template;
  const viewGame = getGameView(type, state);

  return viewGame.el;
};
