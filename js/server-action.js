const URL = `https://es.dump.academy/pixel-hunter/`;

const NAME = `anonymous`;
const ID = 497391;

const parse = (res) => res.json();

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }
  throw new Error(`${res.status}: ${res.statusText}`);
};

export default class ServerAction {
  static getData() {
    return fetch(`${URL}/questions`)
      .then(checkStatus)
      .then(parse);
  }

  static getResults(playerName = NAME) {
    return fetch(`${URL}/stats/${ID}-${playerName}`)
      .then(checkStatus)
      .then(parse);
  }

  static saveResults(data, playerName = NAME) {
    const requestParams = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${URL}/stats/${ID}-${playerName}`, requestParams)
      .then(checkStatus);
  }
}
