const assertEqual = require('./assertEqual');

const head = function(array) { // The head function should not return the first element as an array. It should simply return the element itself.
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["bananas"]), "bananas");
assertEqual(head([]), 5);