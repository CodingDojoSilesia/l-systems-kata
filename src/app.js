import p5 from 'p5'; 
import LSystem from './l-system';
import Turtle from './turtle';

const containerElement = document.getElementById('p5-container');

// an example: Koch curve
const kochCurveGrammar = {
  axiom: 'F',
  rules: {
    'F': 'F+F-F-F+F',
  },
};

const sketch = (p) => {
  let turtle;
  let lSystem;

  /**
   * This function will only run once, at the start of the script
   */
  p.setup = function() {
    p.createCanvas(750, 750);
    // line color
    p.stroke(0, 0, 0, 255);
    
    turtle = new Turtle(p);
    lSystem = new LSystem(kochCurveGrammar.axiom, kochCurveGrammar.rules);

    let iterations = 0;
    let turtleInstructions;

    // be wary not to do too many iterations
    // the output will grow exponentially!
    while (iterations < 5) {
      turtleInstructions = lSystem.iterate();
      iterations++;
    }
  };

  /**
   * This function runs every frame
   */
  p.draw = function() {
    // todo: draw the figure using the L-system output
  };
};

new p5(sketch, containerElement);
