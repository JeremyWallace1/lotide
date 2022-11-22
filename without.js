const assertArraysEqual = function(array1, array2) {
  // console.log(array1, array2);
  // console.log("array lengths: " + array1.length, array2.length)
  const matching = eqArrays(array1, array2);
  console.log(`The two arrays are equal: ${matching}`);
};

const eqArrays = function(array1, array2) {
  // console.log("array lengths: " + array1.length, array2.length)
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  // remove items from the first array that are located in the second array
  let newArray = [...source];
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === newArray[i]) {
        newArray.splice(i, 1);
      }
    }
  }
  console.log(newArray);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 4, 22, 9, -3, "s"], ["s", "-3", 22]); // => [1, 4, 9, -3]
without(["b", "a", "n", "a", "n", "a", "s"], ["a"]); // => ["b", "n", "n", "s"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);