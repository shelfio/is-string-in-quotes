# is-string-in-quotes [![CircleCI](https://circleci.com/gh/shelfio/is-string-in-quotes/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/is-string-in-quotes/tree/master) ![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![npm (scoped)](https://img.shields.io/npm/v/@shelf/is-string-in-quotes.svg)](https://www.npmjs.com/package/@shelf/is-string-in-quotes)

> Check if string is inside quotation marks. Supports 21 quotation styles ([source](https://en.wikipedia.org/wiki/Quotation_mark#Summary_table))

## Install

```
$ yarn add @shelf/is-string-in-quotes
```

## Usage

```js
const {isStringInQuotes} = require('@shelf/is-string-in-quotes');

isStringInQuotes('«hello»');
isStringInQuotes('„hello”');
isStringInQuotes('"hello"');
```

## License

MIT © [Shelf](https://shelf.io)
