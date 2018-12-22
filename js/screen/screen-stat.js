import ViewStat from './../view/view-stat';
import ViewFooter from './../view/view-footer';
import ViewExtraRow from './../view/view-stat-extra-row';
import gameResult from './../data/game-result';
import ViewHeader from '../view/view-header';
import App from './../app';

const text = {
  WIN: `Победа!`,
  FAIL: `Поражение`
};

export default class ScreenStat {
  constructor(data) {
    this.header = new ViewHeader();
    this.header.clickAction = () => App.showGreeting();
    this.wrap = document.createElement(`div`);
    this.wrap.appendChild(this.header.el);
    for (let i = 0; i < data.length; i++) {
      this.state = data[i];
      this.result = gameResult(this.state);
      this.normalPoints = this.result.correct * this.state.settings.NORMAL_POINT;
      this.title = this.getTitle(this.result);
      this.answerLine = new ViewFooter(this.state);
      this.extra = new ViewExtraRow(this.state.life, this.result.fast, this.result.slow, this.state.settings.EXTRA_POINT);
      this.stat = new ViewStat(i, this.result.isFail, this.title, this.answerLine.template, this.normalPoints, this.extra.template, this.result.total);

      this.wrap.appendChild(this.stat.el);
    }

  }

  getTitle(res) {
    return res.isFail ? text.FAIL : text.WIN;
  }

  get el() {
    return this.wrap;
  }
}
