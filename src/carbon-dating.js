const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string'
    || isNaN(sampleActivity)
    || Number(sampleActivity) <= 0
    || Number(sampleActivity) >= MODERN_ACTIVITY) return false;
  let fossilАge;
  let decayConstant = Math.log(2) / HALF_LIFE_PERIOD;
  fossilАge = Math.round(Math.log(MODERN_ACTIVITY / Number(sampleActivity) / decayConstant));
  return fossilАge;
};
