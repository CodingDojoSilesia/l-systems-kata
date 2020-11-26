import TurtleState from '../src/turtle/state';
import Turtle from '../src/turtle/turtle';

describe('Turtle class', () => {
    describe('#goForward', () => {
        it('should draw a line', () => {
            const lineMock = jest.fn();

            let turtle = new Turtle(
                {
                    line: lineMock,
                },
                new TurtleState(0, 0, 0),
                10,
                0
            );

            turtle.goForward();

            expect(lineMock.mock.calls[0][0]).toBe(0);
            expect(lineMock.mock.calls[0][1]).toBe(0);
            expect(lineMock.mock.calls[0][2]).toBe(10);
            expect(lineMock.mock.calls[0][3]).toBe(0);
        });
    });
});
