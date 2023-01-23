const { assert } = require('chai');
const _ = require('../index');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(_.head(['5']), '5');
  });
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(_.head([5, 6, 7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(_.head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns 'bananas' for ['bananas']", () => {
    assert.strictEqual(_.head(["bananas"]), "bananas");
  });
  it("returns undefined for []", () => {
    assert.strictEqual(_.head([]), undefined);
  });
});