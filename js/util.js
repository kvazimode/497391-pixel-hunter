const mainNode = document.querySelector(`#main`);

export const render = (el) => {
  const wrap = document.createElement(`div`);
  wrap.innerHTML = el;
  return wrap;
};
export const setScreen = (screen) => {
  mainNode.innerHTML = ``;
  mainNode.appendChild(screen);
};
