import {setScreen} from './util';
import ViewIntro from './view/view-intro';
import ViewGreeting from './view/view-greeting';
import ViewRules from './view/view-rules';
import ServerAction from './server-action';
import ScreenGame from './screen/screen-game';
import ViewConfirm from './view/view-confirm';
import ViewError from './view/view-error';
import GameModel from './data/game-model';

const loadImage = (answer) => {
  return new Promise((onLoad, onError) => {
    const image = new Image();
    answer.image.preloadedImage = image;
    image.onload = () => onLoad(image);
    image.onerror = () => onError();
    image.src = answer.image.url;
  });
};

let gameData;
export default class App {
  static showIntro() {
    const viewIntro = new ViewIntro();
    setScreen(viewIntro.el);
    ServerAction.getData()
      .then((data) => {
        gameData = data;
        return Promise.all(gameData.reduce((promises, level) => {
          level.answers.forEach((answer) => promises.push(loadImage(answer)));
          return promises;
        }, []));
      })
      .catch(App.showModalError);
  }

  static showGreeting() {
    const viewGreeting = new ViewGreeting();
    setScreen(viewGreeting.el);
  }

  static showRules() {
    const viewRules = new ViewRules();
    setScreen(viewRules.el);
  }

  static showGame(player) {
    const screenGame = new ScreenGame(new GameModel(gameData, player));
    setScreen(screenGame.el);
    screenGame.start();
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
