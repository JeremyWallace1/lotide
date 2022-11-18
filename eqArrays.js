const eqArrays = function(array1, array2) {
  let comparison = (array1 === array2);
  
  if (!array1.length && !array2.length && Array.isArray(array1) && Array.isArray(array2)) { //captures empty arrays
    return false;
  } else if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  //console.log (`array1 is ${array1.length} items long.\narray2 is ${array2.length} items long.\narray1 is ${array1}\narray2 is ${array2}\nThe comparison is ${comparison}`);
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