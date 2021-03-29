const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disks, turnsPerHour) {
  let result = {}

  result.turns = Math.pow(2, disks) - 1
  result.seconds = Math.floor(3600 / turnsPerHour * result.turns)

  return result
};
