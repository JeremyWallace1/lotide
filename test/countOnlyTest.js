const { assert } = require('chai');
const _ = require('../index');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it("returns 1 if ['Jason']", () => {
    assert.equal(result1["Jason"], 1);
  });
  it("return undefined if ['Karima']", () => {
    assert.equal(result1["Karima"], undefined);
  });
  it("return 2 if ['Fang']", () => {
    assert.equal(result1["Fang"], 2);
  });
  it("return undefined if ['Agouhanna']", () => {
    assert.equal(result1["Agouhanna"], undefined);
  });
});