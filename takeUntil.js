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
  //console.log (`array1 is ${array1.length} items long.\narray2 is ${array2.length} items long.\narray1 is ${array1}\narray2 is ${array2}\nThe comparison is ${comparison}`);
  return comparison;
};
const takeUntil = function(array, callback) {
  // ...
  // console.log('the array is: ', array);
  // console.log('the callback is: ', callback);
  newArray = [];
  for (const item of array) {
    if (!callback(item)) {
      newArray.push(item);
    } else {
      return newArray;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);