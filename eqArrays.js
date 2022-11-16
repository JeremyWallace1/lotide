const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let comparison = (array1 === array2);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, "x"], [1, 2, 3, 4, "x"]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4, "x"], [1, 2, 3, 4]), true); // => should FAIL