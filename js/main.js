import {setScreen} from './util';
import ViewIntro from './view/view-intro';
import greetingScreen from './screen/screen-greeting';

const viewIntro = new ViewIntro();
viewIntro.clickAction = () => greetingScreen();

setScreen(viewIntro.el);
