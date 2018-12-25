export default (state, reset) => {
  if (reset) {
    return Object.assign({}, state, {life: 3});
  }
  if (state.life > 0) {
    return Object.assign({}, state, {life: state.life - 1});
  }
  return state;
};
