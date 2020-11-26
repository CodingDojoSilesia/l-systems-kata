export default class Turtle {
  constructor(drawingLib) {
    this.x = 350;
    this.y = 350;
    this.drawingLib = drawingLib;
  }

  goForward() {
    // todo: make the turtle go all directions
    const newX = this.x + 20;
    this.drawingLib.line(this.x, this.y, newX, this.y);
    this.x = newX;
  }
}
