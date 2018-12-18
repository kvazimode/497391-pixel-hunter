export default (state, level) => {
  let toSet = level;

  if (level > state.tasks.length || level < 0 || level === null || level === undefined) {
    toSet = -1;
  }

  return Object.assign({}, state, {level: toSet});
}
