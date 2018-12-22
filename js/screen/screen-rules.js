import ViewRules from './../view/view-rules';
import ViewHeader from './../view/view-header';
import App from './../app';

export default class ScreenRules {
  constructor() {
    this.viewHeader = new ViewHeader();
    this.viewRules = new ViewRules();

    this.wrap = document.createElement(`div`);
    this.wrap.appendChild(this.viewHeader.el);
    this.wrap.appendChild(this.viewRules.el);
    this.viewRules.clickAction = (player) => App.showGame(player);
  }

  get el() {
    return this.wrap;
  }
}
