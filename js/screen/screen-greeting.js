import ViewGreeting from './../view/view-greeting';
import App from './../app';

export default class ScreenGreeting {
  constructor() {
    this.viewGreeting = new ViewGreeting();
    this.viewGreeting.clickAction = () => App.showRules();
  }
  get el() {
    return this.viewGreeting.el;
  }
}
