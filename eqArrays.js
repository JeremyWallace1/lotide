const eqArrays = function(array1, array2) {
  let comparison = (array1 === array2);
  const length1 = array1.length;
  const length2 = array2.length;
  if (!length1 && !length2 && Array.isArray(array1) && Array.isArray(array2) || (length1 !== length2)) { //captures empty arrays
    return false;
  }
  for (let i = 0; i < length1; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, "x"], [1, 2, 3, 4, "x"]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4, "x"], [1, 2, 3, 4]), false); // => should FAIL
assertEqual(eqArrays([], []), false); // => should FAIL
assertEqual(eqArrays([1, 2], "monkey"), false); // => should FAIL