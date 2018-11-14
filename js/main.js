'use strict'

const templateList = [];
const mainNode = document.querySelector('#main');

{
  document.querySelectorAll('template').forEach(item => {
    templateList.push({
      name: item.id,
      content: item.content
    })
  })
}

function setScreen(n) {
  const toPaste = templateList[n].content.cloneNode(true);
  mainNode.appendChild(toPaste);
}

setScreen(1)
