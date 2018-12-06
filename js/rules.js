import {render, setScreen} from './util.js';
import gameOneScreen from './game-one.js';
import greetingScreen from './greeting.js';

const ruleScreen = render(`
  <header class="header">
  <button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>
  </header>
  <section class="rules">
  <h2 class="rules__title">Правила</h2>
  <ul class="rules__description">
    <li>Угадай 10 раз для каждого изображения фото
      <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
      <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
    <li>Фотографиями или рисунками могут быть оба изображения.</li>
    <li>На каждую попытку отводится 30 секунд.</li>
    <li>Ошибиться можно не более 3 раз.</li>
  </ul>
  <p class="rules__ready">Готовы?</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
  </section>
`);

const submitButton = ruleScreen.querySelector(`.rules__button`);
const nameInput = ruleScreen.querySelector(`.rules__input`);
const backButton = ruleScreen.querySelector(`.back`);

nameInput.addEventListener(`input`, () => {
  if (nameInput.value) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

submitButton.addEventListener(`click`, () => {
  setScreen(gameOneScreen);
});

backButton.addEventListener(`click`, () => setScreen(greetingScreen));

export default ruleScreen;
