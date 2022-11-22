const { assert } = require('chai');
const _ = require('../index');

describe("#eqArrays", () => {
  it("returns true if [1, 2, 3], [1, 2, 3] are equal", () => {
    assert.equal(_.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  });
  it ("returns false if 1, 2, 3], [3, 2, 1] are not equal", () => {
    assert.equal(_.eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
  });
  it ('returns true if ["1", "2", "3"], ["1", "2", "3"] are equal', () => {
    assert.equal(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
  });
  it ('returns false if ["1", "2", "3"], ["1", "2", 3] are not equal', () => {
    assert.equal(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL
  });
  it("returns false if [1, 2, 3], [1, 2, 3, 4] are not equal", () => {
    assert.equal(_.eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should FAIL
  });
  it ('returns true if [1, 2, 3, 4, "x"], [1, 2, 3, 4, "x"] are equal', () => {
    assert.equal(_.eqArrays([1, 2, 3, 4, "x"], [1, 2, 3, 4, "x"]), true); // => should PASS
  });
  it ('returns false if [1, 2, 3, 4, "x"], [1, 2, 3, 4] are not equal', () => {
    assert.equal(_.eqArrays([1, 2, 3, 4, "x"], [1, 2, 3, 4]), false); // => should FAIL
  });
  it ('returns false if [1, 2], "monkey" are not equal', () => {
    assert.equal(_.eqArrays([1, 2], "monkey"), false); // => should FAIL
  });
  it ("returns false if [], [] are not equal", () => {
    assert.equal(_.eqArrays([], []), false); // => should FAIL
  });
});