const { assert } = require('chai');
const _ = require('../index');

describe("#middle", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("returns true for ab, ba", () => {
    assert.equal(_.eqObjects(ab, ba), true); // => true
  });
  it("returns false for ab, abc", () => {
    assert.equal(_.eqObjects(ab, abc), false); // => true
  });
  it("returns true for cd, dc", () => {
    assert.equal(_.eqObjects(cd, dc), true); // => true
  });
  it("returns false for cd, cd2", () => {
    assert.equal(_.eqObjects(cd, cd2), false); // => true
  });

  it("returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.equal(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.equal(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }", () => {
    assert.equal(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
  });

  it("returns true for { a: { x: 0, z: { y: 1 } }, b: 2 }, { a: { x: 0, z: { y: 1 } }, b: 2 }", () => {
    assert.equal(_.eqObjects({ a: { x: 0, z: { y: 1 } }, b: 2 }, { a: { x: 0, z: { y: 1 } }, b: 2 }), true); // => true
  });

});