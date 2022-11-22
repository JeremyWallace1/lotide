const { assert } = require('chai');
const _ = require('../index');

describe("#letterPositions", () => {
  const result1 = _.letterPositions("hello");
  it("returns [0] for 'h'", () => {
    assert.deepEqual(result1["h"], [0]);
  });
  it("returns [1] for 'e'", () => {
    assert.deepEqual(result1["e"], [1]);
  });
  it("returns [2, 3] for 'l'", () => {
    assert.deepEqual(result1["l"], [2, 3]);
  });
  it("returns [4] for 'o'", () => {
    assert.deepEqual(result1["o"], [4]);
  });
});