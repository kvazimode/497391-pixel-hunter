import INITIAL_STATE from './game-state';
import {render, enableBackButton, setScreen} from './../util';
import screenHeader from './../screen/screen-header';
import screenFooter from './../screen/screen-footer';
import screenGame from './../screen/screen-game';
import screenStat from './../screen/screen-stat';
import getGameScreen from './get-game-screen';

const gameStart = () => {
  const game = Object.assign({}, INITIAL_STATE);

  const wrapElement = render();
  const headerElement = render();
  const gameElement = render();
  const footerElement = render();

  wrapElement.appendChild(headerElement);
  wrapElement.appendChild(gameElement);
  wrapElement.appendChild(footerElement);

  const changeTask = (state) => {
    if (state.level >= 10 || state.life === 0) {
      setScreen(screenStat(state));
      return;
    }

    const type = state.tasks[state.level].template;
    const gameListener = getGameScreen(type);

    headerElement.innerHTML = screenHeader(state);
    gameElement.innerHTML = screenGame(state);
    footerElement.innerHTML = screenFooter(state);

    enableBackButton(wrapElement);
    gameListener.formListener(gameElement, state, changeTask);
  };
  setScreen(wrapElement);
  changeTask(game);
};

export default gameStart;
