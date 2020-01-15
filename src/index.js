// @see https://en.wikipedia.org/wiki/Quotation_mark#Summary_table

const regexps = [
  /^'.*'$/,
  /^".*"$/,
  /^,.*‘$/,
  /^“.*”$/,
  /^«.*»$/,
  /^„.*“$/,
  /^».*«$/,
  /^».*»$/,
  /^”.*“$/,
  /^‘.*’$/,
  /^’.*‘$/,
  /^’.*’$/,
  /^‚.*‘$/,
  /^‚.*’$/,
  /^”.*”$/,
  /^„.*”$/,
  /^‹.*›$/,
  /^›.*‹$/,
  /^〈.*〉$/,
  /^《.*》$/,
  /^「.*」$/,
  /^『.*』$/
];

module.exports = {
  regexps,
  isStringInQuotes(str = '') {
    return regexps.some(r => r.test(str));
  }
};
