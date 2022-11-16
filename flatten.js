const assertArraysEqual = function(array1, array2) {
  const matching = eqArrays(array1, array2);
  console.log(`The two arrays are equal: ${matching}`);
};

const eqArrays = function(array1, array2) {
  let comparison = false;
  if (array1.length !== array2.length) {
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
};

const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      let innerArray = [...array[i]];
      for (let j = 0; j < innerArray.length; j++) {
        newArray.push(innerArray[j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  //console.log(newArray);
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]