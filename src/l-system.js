export default class LSystem {
  constructor(axiom, rules) {
    this.rules = rules;
    this.state = axiom;
  }

  iterate() {
    // todo: calculate the next state

    return this.state;
  }
}
