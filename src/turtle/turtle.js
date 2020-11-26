import TURTLE_COMMANDS from './commands';

export default class Turtle {
    constructor(drawingLib, startingState, stepLength, turningAngle) {
        this._state = startingState;
        this._step = stepLength;
        this._turningAngle = turningAngle;
        this._drawingLib = drawingLib;
        this._stateStack = [];
    }

    goForward() {
        this.newState = this._state.stepForward(this._step);
        this._drawingLib.line(this._state.getX(), this._state.getY(), this.newState.getX(), this.newState.getY());
        this._state = this.newState;
    }

    turnRight() {
        this._state = this._state.changeDirection(this._turningAngle);
    }

    turnLeft() {
        this._state = this._state.changeDirection(-this._turningAngle);
    }

    executeCommand(commandSymbol) {
        if (TURTLE_COMMANDS[commandSymbol]) {
            this[TURTLE_COMMANDS[commandSymbol]].call(this);
        }
    }

    pushStateToStack() {
        this._stateStack.push(this._state);
    }

    popStateFromStack() {
        this._state = this._stateStack.pop();
    }
}
