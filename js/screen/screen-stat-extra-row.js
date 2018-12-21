import ViewRow from './../view/view-stat-extra-row';

export default (result, life, extraPoints) => {
  let extra = ``;
  if (result.isFail) {
    return extra;
  }
  let row = new ViewRow(life, life * extraPoints, `lives`);
  extra += row.template;
  if (result.fast) {
    row = new ViewRow(result.fast, result.fast * extraPoints, `fast`);
    extra += row.template;
  }
  if (result.slow) {
    row = new ViewRow(result.slow, result.slow * extraPoints, `slow`);
    extra += row.template;
  }
  return extra;
};
