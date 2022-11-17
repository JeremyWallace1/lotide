const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(array1, array2) {
  let comparison = (array1 === array2);
  
  if (!array1.length && !array2.length && Array.isArray(array1) && Array.isArray(array2)) { //captures empty arrays
    comparison = true;
  } else if (array1.length !== array2.length) {
    comparison = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      comparison = (array1[i] === array2[i]);
      if (comparison === false) {
        break;
      }
    }
  }
  return comparison;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[2]);
const results3 = map(words, word => word.length);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['o', 'n', undefined, 'j', 'm']);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);
