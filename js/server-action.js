const URL = `https://es.dump.academy/pixel-hunter/`;

const NAME = `anonymous`;
const ID = 497391;

const parse = (res) => res.json();

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
};

export default class ServerAction {
  static getData() {
    return fetch(`${URL}/questions`)
      .then(checkStatus)
      .then(parse);
  }
}
