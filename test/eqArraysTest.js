const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, "x"], [1, 2, 3, 4, "x"]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4, "x"], [1, 2, 3, 4]), false); // => should FAIL
assertEqual(eqArrays([], []), false); // => should FAIL
assertEqual(eqArrays([1, 2], "monkey"), false); // => should FAIL