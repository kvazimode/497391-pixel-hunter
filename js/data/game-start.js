import INITIAL_STATE from './game-state';
import {render, enableBackButton, setScreen} from './../util';
import ViewHeader from './../view/view-header';
import screenFooter from './../screen/screen-footer';
import screenGame from './../screen/screen-game';
import screenStat from './../screen/screen-stat';

const gameStart = () => {
  const game = Object.assign({}, INITIAL_STATE);

  const wrapElement = render();

  const changeTask = (state) => {
    if (state.level >= 10 || state.life === 0) {
      setScreen(screenStat(state));
      return;
    }

    const viewHeader = new ViewHeader(state);
    const viewGame = screenGame(state);
    const viewFooter = screenFooter(state);

    wrapElement.appendChild(viewHeader.el);
    wrapElement.appendChild(viewGame);
    wrapElement.appendChild(viewFooter);

    enableBackButton(wrapElement);
    // gameType[type].formListener(gameElement, state, changeTask);
  };
  setScreen(wrapElement);
  changeTask(game);
};

export default gameStart;
