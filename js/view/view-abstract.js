import {render} from './../util.js';

export default class ViewAbstract {
  constructor() {
    if (new.target === ViewAbstract) {
      throw new Error(`ViewAbstract is for inherit only`);
    }
  }

  get template() {
    throw new Error(`No template`);
  }

  get el() {
    if (this._el) {
      return this._el;
    }
    this._el = this.render();
    this.bind(this._el);
    return this._el;
  }

  render() {
    return render(this.template);
  }

  bind() {}
  clickAction() {}
}
