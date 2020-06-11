// Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('returns true if and only if both sides are equal', () => {
    let rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
    rectangle = new Rectangle(5, 10);
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it('returns the area of the rectangle', () => {
    const rectangle = new Rectangle(10, 10);
    assert.strictEqual(rectangle.getArea(), 100);
  });

  it('returns the perimeter of the rectangle', () => {
    const rectangle = new Rectangle(5, 15);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });

});
