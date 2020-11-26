import TurtleState from '../src/turtle/state';

describe('TurtleState class', () => {
    describe('#stepForward', () => {
        it('should return a new TurtleState object', () => {
            let state = new TurtleState(1, 2, 3);
            let result = state.stepForward(0);
            
            expect(state == result).toBe(false);
        });

        describe('should calculate a new Turtle position', () => {
            it('horizontally', () => {
                let state = new TurtleState(1, 2, 0);
                let result = state.stepForward(10);

                expect(result.getX()).toBe(11);
                expect(result.getY()).toBe(2);
            });

            it('vertically', () => {
                let state = new TurtleState(1, 2, 90);
                let result = state.stepForward(10);

                expect(result.getX()).toBe(1);
                expect(result.getY()).toBe(12);
            });
        });
    });
});
