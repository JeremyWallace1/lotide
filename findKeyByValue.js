const findKeyByValue = function(object, value) {
  // scans the object and returns the first key which contains the given value
  // if no key with that given value is found, then it should return undefined
  for (const key in object) {
    if (value === object[key]) {
      return key;
    }
  }
  return;
};

module.exports = findKeyByValue; //exports the function