import {setScreen} from './util';
import ViewIntro from './view/view-intro';
import ScreenGreeting from './screen/screen-greeting';
import ScreenRules from './screen/screen-rules';
import ScreenGame from './screen/screen-game';
import ViewConfirm from './view/view-confirm';
import ViewError from './view/view-error';
import GameModel from './data/game-model';
import ScreenStat from './screen/screen-stat';
import ServerAction from './server-action';


let gameData;
export default class App {
  static showIntro() {
    const viewIntro = new ViewIntro();
    setScreen(viewIntro.el);
    ServerAction.getData()
      .then((data) => {
        gameData = data;
      })
      .then(App.showGreeting)
      .catch(App.showModalError);
  }

  static showGreeting() {
    const screenGreeting = new ScreenGreeting();
    setScreen(screenGreeting.el);
  }

  static showRules() {
    const screenRules = new ScreenRules();
    setScreen(screenRules.el);
  }

  static showGame(player) {
    const screenGame = new ScreenGame(new GameModel(gameData, player));
    setScreen(screenGame.el);
    screenGame.start();
  }

  static showStat(state, player) {
    ServerAction.saveResults(state, player)
      .then(() => ServerAction.getResults(player))
      .then((data) => new ScreenStat(data))
      .then((screenStat) => setScreen(screenStat.el))
      .catch(App.showModalError);
  }

  static showModalConfirm() {
    const viewConfirm = new ViewConfirm();
    viewConfirm.open();
  }

  static showModalError() {
    const viewError = new ViewError();
    viewError.open();
  }
}
