const _ = require('../index');

_.assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
_.assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL

_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
_.assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL

_.assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
_.assertArraysEqual([1, 2, 3, 4, "x"], [1, 2, 3, 4, "x"]); // => should PASS
_.assertArraysEqual([1, 2, 3, 4, "x"], [1, 2, 3, 4]); // => should FAIL