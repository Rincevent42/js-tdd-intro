// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters (input) {
  if (input) {
    const words = input.split(' ');
    const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
    const output = capitalizedWords.join(' ');
    return output;
  } else {
    return '';
  }
};

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters transforms a sentence correctly
assert.strictEqual(capitalizeFirstLetters('nous sommes le 9 juin et il pleut.'), 'Nous Sommes Le 9 Juin Et Il Pleut.');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');