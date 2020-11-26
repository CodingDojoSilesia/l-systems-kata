export default class CommandSymbolAdapter {
    constructor(forwardCommandSymbols) {
        this._forwardCommandSymbols = forwardCommandSymbols ?? [];
    }

    translate(commandSymbol) {
        return this._forwardCommandSymbols.includes(commandSymbol) ? 'F' : commandSymbol;
    }
}
