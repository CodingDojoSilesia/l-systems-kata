# L-systems kata

![Fractal plant](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Fractal-plant.svg/453px-Fractal-plant.svg.png)

Fractal plant by Sakurambo from WikiMedia

## Goal

The goal of the kata is to implement a L-system interpreter which takes the system parameters
(variables, start, rules and angle) and draws the result of the system given a number of iterations.

**You can read about the L-systems [here](https://en.wikipedia.org/wiki/L-system).**
You can play around with some examples over [here](http://www.kevs3d.co.uk/dev/lsystems/).

The system is drawn using a "turtle" mechanism in which we have a object (the turtle), that draws the lines
as it moves around the canvas. The turtle takes commands such as "go forward" or "turn X degrees left".

The commands can be written as rules and variables of the L-system, that fed to the turtle for several iteration
can produce comlex structures such as fractals.

## Baby steps

Be sure not to implement the whole thing at once, instead divide the project to parts to complete
and *unit test* them separately. Be sure to focus on completing and testing a step before taking a new one.
You can divide the project yourself or use steps provided below:

* Step 1: Write the L-system implementation, which will calculate consecutive iterarions using given rules
          and the starting state (the axiom).
* Step 2: Implement a "turtle" which takes commands to go forward, turn right or left.
* Step 3: Implement a mechanism which takes L-system output and makes the "turtle" follow the instructions,
          drawing a line as it moves on the canvas. For example: "F+F+F-F++", where "F" means forward,
          "+" means turning right and "-" means turning left.
* Step 4: Use the L-system to draw a fractal such as [Lévy C curve](https://en.wikipedia.org/wiki/L%C3%A9vy_C_curve),
          [Koch curve](https://en.wikipedia.org/wiki/Koch_snowflake), [Sierpiński triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle) or a [Dragon curve](https://en.wikipedia.org/wiki/Dragon_curve)
* Step 5: Use your imagination! Add a mode which draws the figures slowly, so the process is visible.
          Add colors or more accent. Do something with the lines that were drawn several times.
          You can also tackle a more complicated L-system like Fractal plant, which requires additional changes to the turtle (and produces a very cool fractal).

## Files

* `index.html` Main and only html file, hosting the canvas, also contains css styles.
* `app.js` Main JS file, contains the library used for drawing, which is [p5.js](https://p5js.org/).
* `turtle.js` Is a simplistic turtle implementation, which can only go forward.
* `l-system.js` Your L-system, may be a good place to start.

## Drawing

The program uses [p5.js](https://p5js.org/) for drawing on a canvas. It's a JS implementation
of a popular creative coding tool [Processing](https://processing.org/). In the `app.js` file there are two methods:

* `setup`, which runs only once at the start of the script,
* `draw`, which runs every frame of the animation

P5 has a long range of useful methods that can be used for drawing, all of which are listed in the
[reference](https://p5js.org/reference/). Here are methods that you'll find most useful:

* [line](https://p5js.org/reference/#/p5/line)
* [stroke](https://p5js.org/reference/#/p5/stroke)
* [background](https://p5js.org/reference/#/p5/background)

Be sure to explore more creative options if you'll have some time left :)

## Protips

* Use TDD, try and write a SOLID code.
* Be careful about iterating too many times using the L-system, too many iterations will produce strings that
  can kill your browser.
* Take your time to test and refactor. The Dojo is about completing the task using best practices
  and not about how much you'll be able to complete.
* When searching for [L-system grammars on Wikipedia](https://en.wikipedia.org/wiki/L-system)
  notice that the minus character on the wiki is different that the standard one, which can cause problems
  when interpretting commands.
* Make sure that most of your code is not dependent strictly on p5, think what could happen
  if you were to switch the drawing library.
* If you are not seeing the turtle drawing lines, be sure that it's not outside the canvas (the x,y are not negative).

## How to run

1. Install [Node.js](https://nodejs.org/en/download/)
1. To install dependencies: `npm i`
1. Run development server:: `npm run dev`
1. Run tests: `npm run test`

## Useful links

1. https://webpack.js.org
1. https://babeljs.io
