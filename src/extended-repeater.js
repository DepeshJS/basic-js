const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let finalStr = [];

  for (let i = 0; i < options.repeatTimes; i++) {
      finalStr[i] = str
      for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (j + 1 == options.additionRepeatTimes) {
              finalStr[i] += options.addition
          }
          else {
              finalStr[i] += options.addition + options.additionSeparator
          }
      }
  }


  return finalStr.join(options.separator)
};
  