// @see https://en.wikipedia.org/wiki/Quotation_mark#Summary_table

export const regexps: RegExp[] = [
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

export function isStringInQuotes(str = ''): boolean {
  return regexps.some(r => r.test(str));
}
