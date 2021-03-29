const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
      return false;
  }
  let checkMem = members.some(elem => typeof (elem) == 'string' ? true : false)
  if (checkMem == false) {
      return false
  }

  let team = [];
  team = members.filter(elem => {
      if (typeof (elem) == 'string') {
          return elem
      }
  })

  let finalTeam = [];
  finalTeam = team.map(elem => elem.trim().toUpperCase()).sort().map(elem => elem[0])

  return finalTeam.join('')
};
