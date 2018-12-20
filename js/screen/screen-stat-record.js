import ViewFooter from './../view/view-footer';
import {render, setScreen} from './../util';

const TYPE = {
  lives: `Бонус за жизни`,
  fast: `Бонус за скорость`,
  slow: `Штраф за медлительность`
};

const recordHeader = (result, state) => {
  if (!result.isFail) {
    return `
      <td class="result__points">× 100</td>
      <td class="result__total">${result.correct * state.settings.NORMAL_POINT}</td>
      </tr>`;
  } else {
    return `<td class="result__points"></td>`;
  }
};

const extraPointsRow = (amount, points, type) => {
  return `
    <tr>
      <td></td>
      <td class="result__extra">${TYPE[type]}:</td>
      <td class="result__extra">${amount} <span class="stats__result stats__result--${type}"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${points}</td>
    </tr>`;
};

const extraPointsTotal = (result, state) => {
  let temp = ``;
  if (result.isFail) {
    return temp;
  }
  const calculateExtraPoints = (toMultiply) => {
    return toMultiply * state.settings.EXTRA_POINT;
  };
  temp += extraPointsRow(state.life, calculateExtraPoints(state.life), `lives`);

  if (result.fast) {
    temp += extraPointsRow(result.fast, calculateExtraPoints(result.fast), `fast`);
  }

  if (result.slow) {
    temp += extraPointsRow(result.slow, calculateExtraPoints(result.slow), `slow`);
  }
  return temp;
};

const totalScore = (result) => {
  let temp = `<td class="result__total  result__total--final">fail</td>`;

  if (!result.isFail) {
    temp = `
    <tr>
      <td colspan="5" class="result__total  result__total--final">${result.total}</td>
    </tr>`;
  }
  return temp;
};

export default (state, result) => {
  const viewFooter = new ViewFooter(state)
  
  return `
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">
        ${viewFooter.el}
      </td>
      ${recordHeader(result, state)}
    ${extraPointsTotal(result, state)}
    ${totalScore(result)}
  </table>`;
};
