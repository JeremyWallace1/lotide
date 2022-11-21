const assertEqual = require('./assertEqual');

const head = function(array) { // The head function should not return the first element as an array. It should simply return the element itself.
  return array[0];
};

module.exports = head; //export the function