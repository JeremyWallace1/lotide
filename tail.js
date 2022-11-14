const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(array) { // The tail is meant to be every element except the head (first element) of the array.
  let newArray = [];
  for (let j = 1; j < array.length; j++) {
    newArray.push(array[j]);
  }
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // compare the values of the returned tail array directly
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthosue", "Labs"];
tail(words); // The tail function should be returning a new array and not modify the original array that is passed in.
assertEqual(words.length, 3);

const places = tail(["Vancouver"]); //should be an empty array []
console.log(places); //confirm empty array []
assertEqual(places.length, 1); //should be false (0 !== 1)
assertEqual(places[0], "Vancouver"); //should be false (undefined !== "Vancouver")