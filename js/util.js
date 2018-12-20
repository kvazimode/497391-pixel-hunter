const mainNode = document.querySelector(`#main`);

export const render = (el = ``) => {
  const wrap = document.createElement(`div`);
  wrap.innerHTML = el;
  return wrap;
};
export const setScreen = (screen) => {
  mainNode.innerHTML = ``;
  mainNode.appendChild(screen);
};
let greetingScreen;
export const setGreeting = (el) => {
  greetingScreen = el;
};
export const enableBackButton = (template) => {
  const backButton = template.querySelector(`.back`);
  backButton.addEventListener(`click`, () => setScreen(greetingScreen));
};
export const compareAnswers = (given, correct) => {
  if (typeof given === `string`) {
    return given === correct;
  }
  if (typeof given === `object`) {
    let equal = given.every((item, i) => {
      return item === correct[i];
    });
    return equal;
  }
};
