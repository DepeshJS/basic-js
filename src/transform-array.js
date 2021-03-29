const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
      throw new Error()
  }

  let transArr = [];
  for (let i = 0; i < arr.length; i++) {

      switch (arr[i]) {
          case '--discard-next':
              i++
              break;
          case '--discard-prev':
              transArr.pop()
              break;
          case '--double-next':
              //transArr.splice(i, 0, arr[i + 1])
              if (i + 1 < arr.length) {
                  transArr.push(arr[i + 1])
              }
              break;
          case '--double-prev':
              //transArr.splice(i, 0, arr[i - 1])
              if (i - 1 >= 0) {
                  transArr.push(arr[i - 1])
              }
              break;
          default:
              transArr.push(arr[i])
      }

  }
  return transArr
};
