const tail = function(array) { // The tail is meant to be every element except the head (first element) of the array.
  let newArray = [];
  for (let j = 1; j < array.length; j++) {
    newArray.push(array[j]);
  }
  return newArray;
};

module.exports = tail; //export the function