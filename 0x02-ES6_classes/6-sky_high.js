import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get sqft() { return this._sqft; }

  get floors() { return this._floors; }

  set sqft(sq) {
    this._sqft = sq;
  }

  set floors(fl) {
    this._floors = fl;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
