import {setScreen, setGreeting} from './util';
import introScreen from './screen/screen-intro';
import greetingScreen from './screen/screen-greeting';

setGreeting(greetingScreen);
setScreen(introScreen);
