const templateList = [];
const mainNode = document.querySelector('#main');
const RIGHT_KEY_CODE = 39;
const LEFT_KEY_CODE = 37;
let currentScreen = 1; //1 - startScreen

{
  document.querySelectorAll('template').forEach(item => {
    templateList.push({
      name: item.id,
      content: item.content
    })
  })
}

function setScreen(n) {
  if (n >= 0 && n < templateList.length) {
    while (mainNode.firstChild) {
      mainNode.removeChild(mainNode.firstChild);
    }
    const toPaste = templateList[n].content.cloneNode(true);
    mainNode.appendChild(toPaste);
    currentScreen = n;
  } else {
    alert('туда нельзя');
  }
}

//direction === 1 - right(increase); 0 - left(decrease)
function toggleScreen(direction) {
  direction ? setScreen(currentScreen + 1) : setScreen(currentScreen - 1);
}

function arrowKeyPressHandler(evt) {
  if (evt.keyCode === RIGHT_KEY_CODE) {
    toggleScreen(1);
  } else if (evt.keyCode === LEFT_KEY_CODE) {
    toggleScreen(0);
  }
}

const buttonWrapNode = document.createElement('div');
buttonWrapNode.innerHTML = `
  <div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
  </div>
`;

document.body.appendChild(buttonWrapNode.firstElementChild.cloneNode(true));
const toggleButtonList = document.querySelectorAll('.arrows__btn');

function arrowClickHandler(evt){
  (evt.currentTarget.innerText === '<-') ? toggleScreen(0) : toggleScreen(1);
}

toggleButtonList.forEach(btn => {btn.addEventListener('click', arrowClickHandler)});
document.addEventListener('keydown', arrowKeyPressHandler)
setScreen(currentScreen);
