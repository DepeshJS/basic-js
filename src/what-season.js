const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof (date) === 'undefined') {
      throw new Error()
  }
  if (typeof (date) != 'object') {
      return 'Unable to determine the time of year!'
  }

  let month = date.getMonth()
  if (month < 2 || month == 11) {
      return 'winter'
  }
  if (month > 1 && month <= 4) {
      return 'spring'
  }
  if (month >= 5 && month < 8) {
      return 'summer'
  }
  if (month >= 8 && month < 11) {
      return 'autumn'
  }

  return month
};
