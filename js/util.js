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
  let isCorrect = false;
  if (typeof given === `string`) {
    let url = ``;
    let photo = 0;
    let paint = 0;
    let type = ``;
    for (let item of correct) {
      if (item.type === `photo`) {
        photo += 1;
      } else {
        paint += 1;
      }
    }
    type = photo > paint ? `painting` : `photo`;
    for (let item of correct) {
      url = item.type === type ? item.image.url : ``;
    }
    isCorrect = given === url;
  }
  if (typeof given === `object`) {
    let equal = given.every((item, i) => {
      return item === correct[i].type;
    });
    isCorrect = equal;
  }
  return isCorrect;
};
export const getGameView = (type, state) => {
  switch (type) {
    case `tinder-like`:
      return new ViewOnePic(state);
    case `two-of-two`:
      return new ViewTwoPic(state);
    case `one-of-three`:
      return new ViewThreePic(state);
  }
};
