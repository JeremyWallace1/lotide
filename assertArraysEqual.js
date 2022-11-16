const assertArraysEqual = function(array1, array2) {
  const matching = eqArrays(array1, array2); 
  console.log(`Assertion Passed: ${matching}`);
};

const eqArrays = function(array1, array2) {
  let comparison = false;
  if (array1.length != array2.length) {
    comparison = false;
    return comparison;
  }
  for (let i = 0; i < array1.length; i++) {
    comparison = (array1[i] === array2[i]);
    if (comparison === false) {
      return comparison;
    }
  }
  return comparison;
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual([1, 2, 3, 4, "x"], [1, 2, 3, 4, "x"]); // => should PASS
assertArraysEqual([1, 2, 3, 4, "x"], [1, 2, 3, 4]); // => should FAIL