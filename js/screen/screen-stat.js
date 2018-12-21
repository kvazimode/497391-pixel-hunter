import {render, enableBackButton} from './../util';
import ViewStat from './../view/view-stat';
import ViewFooter from './../view/view-footer';
import ViewExtraRow from './../view/view-stat-extra-row';
import gameResult from './../data/game-result';

const text = {
  WIN: `Победа!`,
  FAIL: `Поражение`
};

export default (state) => {
  const result = gameResult(state);
  const title = (res) => {
    return res.isFail ? text.FAIL : text.WIN;
  };
  const extraRow = new ViewExtraRow(state.life, result.fast, result.slow, state.settings.EXTRA_POINT);
  const answerLine = new ViewFooter(state);
  const normalPoints = result.correct * state.settings.NORMAL_POINT;
  const stat = new ViewStat(result.isFail, title(result), answerLine.template, normalPoints, extraRow.template, result.total);

  const statScreen = render(stat.template);
  enableBackButton(statScreen);
  return statScreen;
};
