export default (state, reset) => {
  if (reset) {
    return Object.assign({}, state, {time: 30});
  }
  return Object.assign({}, state, {time: state.time - 1});
};
