import {setScreen, enableBackButton} from './../util';
import gameStart from './../data/game-start';
import ViewRules from './../view/view-rules';

export default () => {
  const viewRules = new ViewRules();
  enableBackButton(viewRules.el);
  viewRules.clickAction = (evt) => {
    evt.preventDefault();
    gameStart();
  };
  setScreen(viewRules.el);
};
