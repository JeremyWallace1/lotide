const flatten = function(array) {
  let newArray = [];
  for (let i in array) {
    if (Array.isArray(array[i]) === true) {
      let innerArray = [...array[i]];
      for (let j in innerArray) {
        newArray.push(innerArray[j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = flatten;