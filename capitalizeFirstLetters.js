// capitalizeFirstLetters.js
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

module.exports = capitalizeFirstLetters;
