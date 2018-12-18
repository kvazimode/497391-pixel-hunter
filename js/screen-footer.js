export default (state) => {
  const answerLine = [];
  for (const task of state.tasks) {
    let answerType = `unknown`;
    if (task.answer) {
      answerType = `correct`;
      if (task.time < state.FAST) {
        answerType = `fast`;
      } else if (task.time > state.SLOW) {
        answerType = `slow`;
      }
    } else {
      answerType = `wrong`;
    }
    answerLine.push(`<li class="stats__result stats__result--${answerType}"></li>`);
  }

  const temp = `
      <ul class="stats">
        ${answerLine.join(``)}
      </ul>
    </section>`;
  return temp;
};