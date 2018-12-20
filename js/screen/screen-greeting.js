import {setScreen, setGreeting} from './../util';
import ruleScreen from './screen-rules';
import ViewGreeting from './../view/view-greeting';

export default () => {
  const viewGreeting = new ViewGreeting();
  viewGreeting.clickAction = () => ruleScreen();
  setGreeting(viewGreeting.el);
  setScreen(viewGreeting.el);
};
