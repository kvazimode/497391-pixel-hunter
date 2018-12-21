import INITIAL_STATE from './game-state';
import {render, enableBackButton, setScreen, getGameView} from './../util';
import ViewHeader from './../view/view-header';
import ViewFooter from './../view/view-footer';
import screenStat from './../screen/screen-stat';
import updateState from './update-state';

const gameStart = () => {
  const game = Object.assign({}, INITIAL_STATE);
  const wrapElement = render();

  const changeTask = (state) => {
    if (state.level >= 10 || state.life === 0) {
      setScreen(screenStat(state));
      return;
    }
    const type = state.tasks[state.level].template;
    const viewHeader = new ViewHeader(state);
    const viewGame = getGameView(type, state);
    const viewFooter = new ViewFooter(state);

    wrapElement.innerHTML = ``;
    wrapElement.appendChild(viewHeader.el);
    wrapElement.appendChild(viewGame.el);
    wrapElement.appendChild(viewFooter.el);

    enableBackButton(wrapElement);
    viewGame.clickAction = (answer) => {
      updateState(state, answer, changeTask);
    };
  };
  setScreen(wrapElement);
  changeTask(game);
};

export default gameStart;
