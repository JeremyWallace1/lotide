const middle = function(array) {
  let len = array.length;
  let middleArray = [];
  // make it an empty array if 2 elements or less
  if (len <= 2) {
    return middleArray; // exits the function
  }
  // check if length is odd
  if (len % 2 !== 0) {
    middleArray.push(array[Math.floor(len / 2)]);
  }
  // check if length is even
  if (len % 2 === 0) {
    middleArray.push(array[len / 2 - 1], array[len / 2]);
  }
  return middleArray;
};

module.exports = middle; //exports the function