const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var teamName = '';
  if(Array.isArray(members) === false) return false;
    members.forEach(element => {
      if(typeof(element) === 'string') teamName += element.trim()[0];
    });
  return teamName.toUpperCase().split('').sort().join('');
};
