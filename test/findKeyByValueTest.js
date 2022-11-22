const { assert } = require('chai');
const _ = require('../index');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns 'drama' for 'The Wire'", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("returns 'sciFi' for 'The Expanse'", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });

});