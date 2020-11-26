export default class LSystem {
    constructor(options) {
        this.state = options.axiom ?? '';
        this.rules = options.rules ?? {};
    }

    iterate() {
        return this.state = this.state.split('').map((character) => {
            return this.rules[character] ?? character;
        }).join('');
    }
}
