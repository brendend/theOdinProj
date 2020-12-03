const ftoc = function(temp) {
  c = (temp - 32) * (5/9);
  return Math.round(c * 10) / 10;
}

const ctof = function(temp) {
  f = (temp * (9/5)) + 32;
  return Math.round(f * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
