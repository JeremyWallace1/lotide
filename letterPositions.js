const assertArraysEqual = function(array1, array2) {
  const matching = eqArrays(array1, array2);
  console.log(`The two arrays are equal: ${matching}`);
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
const letterPositions = function(sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  //console.log(results);
  return results;
};

const result1 = letterPositions("hello");
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4])