const {isStringInQuotes} = require('./index');

it('should export isStringInQuotes function', () => {
  expect(isStringInQuotes).toBeInstanceOf(Function);
});

it('should return false for empty string', () => {
  expect(isStringInQuotes('')).toEqual(false);
});

it('should return false for no args', () => {
  expect(isStringInQuotes()).toEqual(false);
});

it('should return true for empty string in quotes ', () => {
  expect(isStringInQuotes('""')).toEqual(true);
});

it('should return true for non empty string in quotes ', () => {
  expect(isStringInQuotes('"hello"')).toEqual(true);
});

it('should return true for non empty string in different quotes ', () => {
  expect(isStringInQuotes('„hello”')).toEqual(true);
});
