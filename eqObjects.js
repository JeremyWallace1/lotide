const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (!Array.isArray(object1)) {
    if (Object.keys(object1).length === Object.keys(object2).length) {
      for (const key of Object.keys(object1)) {
        if (key in object2) {
          if (typeof(object1[key]) === 'object' && !Array.isArray(object1[key]) && (object1[key] !== null))
            return eqObjects(object1[key], object2[key]);
          else if (Array.isArray(object1[key])) {
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
  }
  return false;
};

module.exports = eqObjects;