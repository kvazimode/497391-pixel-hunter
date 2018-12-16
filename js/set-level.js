export const setLevel = (state, level) => {
  let toSet = level;

  if (level > state.tasks || level < 0 || level === null || level === undefined) {
    toSet = -1;
  }

  return Object.assign({}, state, {level: toSet});
}
