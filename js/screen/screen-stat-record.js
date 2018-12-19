import screenFooter from './screen-footer';

const recordHeader = (result, state) => {
  if (!result.isFail) {
    return `
      <td class="result__points">× 100</td>
      <td class="result__total">${result.correct * state.settings.NORMAL_POINT}</td>
      </tr>`;
  } else {
    return `<td class="result__points"></td>`;
  }
}

const extraPointsRow = (amount, points, type) => {
  const TYPE = {
    lives: `Бонус за жизни`,
    fast: `Бонус за скорость`,
    slow: `Штраф за медлительность`
  };

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

  const calculateExtraPoints = (toMultiply) => {
    return toMultiply * state.settings.EXTRA_POINT;
  }

  if (!result.isFail) {
    temp += extraPointsRow(state.life, calculateExtraPoints(state.life), `lives`)
  };

  if (!result.isFail && result.fast) {
    temp += extraPointsRow(result.fast, calculateExtraPoints(result.fast), `fast`)
  };

  if (!result.isFail && result.slow) {
    temp += extraPointsRow(result.slow, calculateExtraPoints(result.slow), `slow`)
  };

  return temp;
}

const totalScore = (result) => {
  let temp = `<td class="result__total  result__total--final">fail</td>`;

  if (!result.isFail) {
    temp = `
    <tr>
      <td colspan="5" class="result__total  result__total--final">${result.total}</td>
    </tr>`;
  }
  return temp;
}

export default (state, result) => {
  return `
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">
        ${screenFooter(state)}
      </td>
      ${recordHeader(result, state)}
    ${extraPointsTotal(result, state)}
    ${totalScore(result)}
  </table>
  `
}