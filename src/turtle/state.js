export default class TurtleState {
    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    getX() {
        return this._x;
    }

    getY() {
        return this._y;
    }

    stepForward(stepLength) {
        return new TurtleState(
            Math.round(this._x + stepLength * Math.cos(this._direction * (Math.PI / 180.0))),
            Math.round(this._y + stepLength * Math.sin(this._direction * (Math.PI / 180.0))),
            this._direction
        );
    }

    changeDirection(delta) {
        return new TurtleState(this._x, this._y, this._direction + delta);
    }
}
