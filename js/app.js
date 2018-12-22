import {setScreen} from './util';
import ViewIntro from './view/view-intro';
import ScreenGreeting from './screen/screen-greeting';
import ScreenRules from './screen/screen-rules';
import ScreenGame from './screen/screen-game';
import ViewConfirm from './view/view-confirm';
import ViewError from './view/view-error';
import GameModel from './data/game-model';
import ScreenStat from './screen/screen-stat';

export default class App {
  static showIntro() {
    const viewIntro = new ViewIntro();
    setScreen(viewIntro.el);
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
    const screenGame = new ScreenGame(new GameModel(player));
    setScreen(screenGame.el);
    screenGame.start();
  }

  static showStat(state) {
    const screenStat = new ScreenStat(state);
    setScreen(screenStat.el);
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
