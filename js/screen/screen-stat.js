import {render, enableBackButton} from './../util';
import ViewStatHeader from './../view/view-stat-header';
import ViewStatHeaderFail from './../view/view-stat-header-fail';
import ViewFooter from './../view/view-footer';
import ViewStatRecordStart from '../view/view-stat-record-start';
import ViewStatRecordNormal from '../view/view-stat-record-normal';
import ViewStatRecordFail from '../view/view-stat-record-fail';
import screenStatExtraRow from './screen-stat-extra-row';
import ViewStatRecordTotal from './../view/view-stat-record-total';
import ViewStatRecordTotalFail from './../view/view-stat-record-total-fail';
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
  const header = new ViewStatHeader(title(result));
  const headerFail = new ViewStatHeaderFail(title(result));
  const tableStart = new ViewStatRecordStart();
  const answerLine = new ViewFooter(state);
  const normalPoints = new ViewStatRecordNormal(result.correct * state.settings.NORMAL_POINT);
  const fail = new ViewStatRecordFail();
  const extraRow = screenStatExtraRow(result, state.life, state.settings.EXTRA_POINT);
  const total = new ViewStatRecordTotal(result.total);
  const totalFail = new ViewStatRecordTotalFail();
  let template = ``;
  
  if (result.isFail) {
    template += headerFail.template;
    template += tableStart.template;
    template += answerLine.template;
    template += fail.template;
    template += totalFail.template;
  } else {
    template += header.template;
    template += tableStart.template;
    template += answerLine.template;
    template += normalPoints.template;
    template += extraRow;
    template += total.template;
  }
  const statScreen = render(template);
  enableBackButton(statScreen);
  return statScreen;
};
