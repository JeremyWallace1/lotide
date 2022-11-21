const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      if (key in object2) {
        if (Array.isArray(object1[key])) {
          return eqArrays(object1[key], object2[key]);
        }
        if (object1[key] !== object2[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects; //exports the function