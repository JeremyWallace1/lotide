const assertArraysEqual = require('../assertArraysEqual');
const _ = require('../index');

assertArraysEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]