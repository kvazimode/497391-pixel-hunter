import {render, getGameView} from './../util';
import ViewHeader from './../view/view-header';
import ViewFooter from './../view/view-footer';
import App from './../app';

const SECOND = 1000;
const BLINK_INTERVAL = 250;
const BLINK_TIME = 5;

export default class ScreenGame {
  constructor(model) {
    this.model = model;
    this.type = this.model.state.tasks[this.model.state.level].type;
    this.wrapElement = render();
    this.header = new ViewHeader(this.model.state);
    this.game = getGameView(this.type, this.model.state);
    this.footer = new ViewFooter(this.model.state);

    this.wrapElement.appendChild(this.header.el);
    this.wrapElement.appendChild(this.game.el);
    this.wrapElement.appendChild(this.footer.el);

    this._interval = null;
    this._blinkInterval = null;
  }

  get el() {
    return this.wrapElement;
  }

  start() {
    this.model.restart();
    this.changeTask();
  }

  stop() {
    App.showStat(this.model.state, this.model.player);
  }

  changeTask() {
    if (this.model.gameOver()) {
      this.stop();
      return;
    }

    this.updateHeader();
    this.updateTask();
    this.updateFooter();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
      this.checkTimer();
    }, SECOND);
  }

  updateHeader() {
    const header = new ViewHeader(this.model.state);
    this.wrapElement.replaceChild(header.el, this.header.el);
    this.header = header;
  }

  updateTask() {
    const type = this.model.state.tasks[this.model.state.level].type;
    const game = getGameView(type, this.model.state);
    game.clickAction = (answer) => {
      this.updateState(answer);
    };
    this.wrapElement.replaceChild(game.el, this.game.el);
    this.type = type;
    this.game = game;
  }

  updateFooter() {
    const footer = new ViewFooter(this.model.state);
    this.wrapElement.replaceChild(footer.el, this.footer.el);
    this.footer = footer;
  }

  checkTimer() {
    if (this.model.state.time <= BLINK_TIME && !this._blinkInterval) {

      this._blinkInterval = setInterval(() => {
        this.header.blink();
      }, BLINK_INTERVAL);
    }

    if (this.model.outOfTime()) {
      this.model.decreaseLife();
      this.updateState();
    }
  }

  stopTime() {
    clearInterval(this._interval);
    clearInterval(this._blinkInterval);
    this._blinkInterval = null;
  }

  updateState(answer) {
    this.stopTime();
    if (answer) {
      this.model.writeAnswer(answer, this.model.state.time);
    } else {
      this.model.setNextLevel(this.model.state);
    }
    if (this.model.state.level >= this.model.state.tasks.length) {
      this.stop();
      return;
    }
    this.changeTask();
  }
}
