import {render, setScreen} from './util';
import greetingScreen from './screen-greeting';

const introScreen = render(`
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
`);

const asteriskButton = introScreen.querySelector(`.intro__asterisk`);
asteriskButton.addEventListener(`click`, () => {
  setScreen(greetingScreen);
});

export default introScreen;
