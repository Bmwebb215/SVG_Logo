

const { Circle, Square, Triangle } = require('./shapes');

describe('Shape Tests', () => {
  test('Circle should render correct SVG', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" style="fill:red"/>');
  });

  test('Square should render correct SVG', () => {
    const square = new Square('blue');
    expect(square.render()).toBe('<rect width="300" height="200" style="fill:blue"/>');
  });

  test('Triangle should render correct SVG', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toBe('<polygon points="150, 1 250, 184 50, 185" style="fill:green"/>');
  });
});