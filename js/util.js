const mainNode = document.querySelector(`#main`);
import ViewOnePic from './view/view-one-pic';
import ViewTwoPic from './view/view-two-pic';
import ViewThreePic from './view/view-three-pic';

export const render = (el = ``) => {
  const wrap = document.createElement(`div`);
  wrap.innerHTML = el.trim();
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
export const getGameView = (type, state) => {
  switch(type) {
    case `onePic`:
      return new ViewOnePic(state);
    case `twoPic`:
      return new ViewTwoPic(state);
    case `threePic`:
      return new ViewThreePic(state);
  }
};
