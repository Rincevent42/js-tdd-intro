// capitalizeFirstLetters.test.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

// give the test suite a label using describe
describe('capitalizeFirstLetters', () => {
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('transforms a sentence correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('nous sommes le 9 juin et il pleut.'), 'Nous Sommes Le 9 Juin Et Il Pleut.');
  });

  it('works for a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });

  it('it works for an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
