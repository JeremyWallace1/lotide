const eqArrays = function(array1, array2) {
  const length1 = array1.length;
  const length2 = array2.length;
  
  // console.log("not an array or not the same lengths", !Array.isArray(array1) || !Array.isArray(array2) || (length1 !== length2));

  if (!length1 || !length2 || !Array.isArray(array1) || !Array.isArray(array2) || (length1 !== length2)) { //captures empty arrays
    return false;
  } else {
    for (let i = 0; i < length1; i++) {
      // console.log(`is ${array1[i]} an array?: ${Array.isArray(array1[i])}`);
      // console.log(`is ${array2[i]} an array?: ${Array.isArray(array2[i])}`);
      if (Array.isArray(array1[i]) === true && Array.isArray(array2[i]) === true) {
        let value = eqArrays(array1[i], array2[i]);
        if (value === false) {
          return false;
        }
      } else if (array1[i] === array2[i]) {
        // console.log(`is ${array1[i]} === ${array2[i]}? ${(array1[i] === array2[i])}`);
      } else {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays; //export the function