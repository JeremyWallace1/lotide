const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

module.exports = assertEqual; //export the function

/*
NB: Notice how we are passing the variable assertEqual (which points to our function) and not calling assertEqual via assertEqual() here. This is an important distinction.
*/
