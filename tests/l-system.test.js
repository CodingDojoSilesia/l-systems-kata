import LSystem from '../src/l-system';

describe('LSystem class', () => {
  describe('#iteration', () => {
    test('calculates next iterarion using the provided grammar', () => {
      const lsystem = new LSystem(
        'F',
        {
          'F': 'F+-F-+',
        }
      );

      expect(lsystem.iterate()).toBe('F+-F-+');
      expect(lsystem.iterate()).toBe('F+-F-++-F+-F-+-+');
    });
  });
});
