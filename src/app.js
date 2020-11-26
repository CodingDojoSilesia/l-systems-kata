import p5 from 'p5'; 
import LSystem from './l-system';
import Turtle from './turtle/turtle';
import TurtleState from './turtle/state';
import CommandSymbolAdapter from './turtle/commandSymbolAdapter';

const containerElement = document.getElementById('p5-container');

// Koch curve
const kochCurveGrammar = {
  axiom: 'F-G-G',
  rules: {
    'F': 'F+F-F-F+F',
  },
};

// Sierpinski triangle
const sierpinskiTraingleGrammar = {
  axiom: 'F-G-G',
  rules: {
    'F': 'F-G+F+G-F',
    'G': 'GG',
  },
};

// Dragon curve
const dragonCurveGrammar = {
  axiom: 'FX',
  rules: {
    'X': 'X+YF+',
    'Y': '-FX-Y',
  },
};

// Levy C curve
const levyCCurveGrammar = {
  axiom: 'F',
  rules: {
    'F': '+F--F+',
  },
};

// Fractal Plant
const fractalPlantGrammar = {
  axiom: 'XF',
  rules: {
    'X': 'F+[[X]-X]-F[-FX]+X',
    'F': 'FF',
  },
};

const sketch = (p) => {
  let turtle;
  let lSystem;
  let commandSymbolAdapter;
  let iterations = 0;
  let iteration = '';

  /**
   * This function will only run once, at the start of the script
   */
  p.setup = function() {
    p.createCanvas(750, 750);
    // line color
    p.stroke(0, 0, 0, 255);
    const startingTurtleState = new TurtleState(0, 750, 315);
    commandSymbolAdapter = new CommandSymbolAdapter(['G']);
    turtle = new Turtle(p, startingTurtleState, 5, 25);
    lSystem = new LSystem(fractalPlantGrammar);

    while (iterations < 6) {
      iteration = lSystem.iterate();
      iterations++;
    }
  };

  /**
   * This function runs every frame
   */
  p.draw = function() {
    const commandSymbol = iteration.charAt(0);
    if (commandSymbol) {
      iteration = iteration.substring(1);
      turtle.executeCommand(
        commandSymbolAdapter.translate(commandSymbol)
      );
    }
  };
};

new p5(sketch, containerElement);
