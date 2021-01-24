const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  var teamName = '';
  if(Array.isArray(members) === false) return false;
    members.forEach(element => {
      if(typeof(element) === 'string') teamName += element.trim()[0];
    });
  console.log(teamName);
  return teamName.toUpperCase().split('').sort().join('');
};
