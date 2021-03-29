const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  let cats = [];
  for (let i = 0; i < backyard.length; i++) {
      cats = backyard[i].filter(elem => elem == '^^')
      count += cats.length
  }
  return count
};
