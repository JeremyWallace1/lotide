const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(sentence) {
  const lettersCount = {};
  for (letter of sentence) {
    if (letter !== ' ') {
      if (lettersCount[letter]) {
        lettersCount[letter] += 1;
      } else {
        lettersCount[letter] = 1;
      }
    }
  }
  return lettersCount;
};
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["g"], 1);