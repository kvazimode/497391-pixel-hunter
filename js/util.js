const mainNode = document.querySelector(`#main`);

export default {
  render: (el) => {
    const wrap = document.createElement(`div`);
    wrap.innerHTML = el;
    return wrap;
  }
}