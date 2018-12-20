import onePicGame from './../screen/screen-one-pic';
import twoPicGame from './../screen/screen-two-pic';
import threePicGame from './../screen/screen-three-pic';
const gameType = {
  onePic: onePicGame,
  twoPic: twoPicGame,
  threePic: threePicGame
};
export default (type) => {
  return gameType[type];
};
