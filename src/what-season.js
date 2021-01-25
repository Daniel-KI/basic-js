const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seasons = new Map([
    [0, 'winter'],
    [1, 'spring'],
    [2, 'summer'],
    [3, 'fall'],
  ]);

  if(!date) return 'Unable to determine the time of year!';
  if(Object.prototype.toString.apply(date) !== "[object Date]" || isNaN(date)) throw new Error();
  return seasons.get(Math.floor((date.getMonth() + 1) % 12 / 3));
};
