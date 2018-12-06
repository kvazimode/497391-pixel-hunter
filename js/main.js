import {setScreen} from './util.js';
import introScreen from './intro.js';

setScreen(introScreen);

// const screenOrder = [
//   `intro`,
//   `greeting`,
//   `rules`,
//   `game-1`,
//   `game-2`,
//   `game-3`,
//   `stats`,
//   `modal-error`,
//   `modal-confirm`
// ];
// const orderedTemplateList = [];
// const mainNode = document.querySelector(`#main`);
// const RIGHT_KEY_CODE = 39;
// const LEFT_KEY_CODE = 37;
// let currentScreen = 1; // 1 - startScreen

// document.querySelectorAll(`template`).forEach((item) => {
//   const shadow = document.createElement(`div`);
//   const content = item.content.cloneNode(true);
//   shadow.appendChild(content);
//   for (let i = 0; i <= screenOrder.length; i++) {
//     if (item.id === screenOrder[i]) {
//       orderedTemplateList[i] = shadow;
//     }
//   }
// });

// function setScreen(n) {
//   if (n >= 0 && n < orderedTemplateList.length) {
//     while (mainNode.firstChild) {
//       mainNode.removeChild(mainNode.firstChild);
//     }
//     const toPaste = orderedTemplateList[n].cloneNode(true);
//     mainNode.appendChild(toPaste);
//     currentScreen = n;
//   }
// }

// // direction === 1 - right(increase); 0 - left(decrease)
// function toggleScreen(direction) {
//   if (direction) {
//     setScreen(currentScreen + 1);
//   } else {
//     setScreen(currentScreen - 1);
//   }
// }

// function arrowKeyPressHandler(evt) {
//   if (evt.keyCode === RIGHT_KEY_CODE) {
//     toggleScreen(1);
//   } else if (evt.keyCode === LEFT_KEY_CODE) {
//     toggleScreen(0);
//   }
// }

// const buttonWrapNode = document.createElement(`div`);
// buttonWrapNode.innerHTML = `
//   <div class="arrows__wrap">
//     <style>
//       .arrows__wrap {
//         position: absolute;
//         top: 95px;
//         left: 50%;
//         margin-left: -56px;
//       }
//       .arrows__btn {
//         background: none;
//         border: 2px solid black;
//         padding: 5px 20px;
//       }
//     </style>
//     <button class="arrows__btn"><-</button>
//     <button class="arrows__btn">-></button>
//   </div>
// `;

// document.body.appendChild(buttonWrapNode.firstElementChild.cloneNode(true));
// const toggleButtonList = document.querySelectorAll(`.arrows__btn`);

// function arrowClickHandler(evt) {
//   if (evt.currentTarget.innerText === `<-`) {
//     toggleScreen(0);
//   } else {
//     toggleScreen(1);
//   }
// }

// toggleButtonList.forEach((btn) => {
//   btn.addEventListener(`click`, arrowClickHandler);
// });
// document.addEventListener(`keydown`, arrowKeyPressHandler);
// setScreen(currentScreen);
