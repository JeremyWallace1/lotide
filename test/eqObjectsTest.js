const _ = require('../index');
const assertEqual = require('../assertEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(_.eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(_.eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(_.eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(_.eqObjects(cd, cd2), false); // => false