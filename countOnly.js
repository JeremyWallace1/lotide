const countOnly = function(allItems, itemsToCount) {
  const newObject = {};
  for (let i in allItems) {
    let item = allItems[i];
    if (itemsToCount[item]) {
      if (newObject[item]) {
        newObject[item] += 1;
      } else {
        newObject[item] = 1;
      }
    }
  }
  return newObject;
};

module.exports = countOnly; //export the function