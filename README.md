# qc-round

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Rounds a number to a specified number of decimal places.


## Installation

```sh
npm install --save qc-round
```


## Comparison with JavaScript's Math.round

**Differences**

* `Math.round` doesn't allow rounding to be done at different decimal positions.
  It has to be simulated.

  - `Math.round(value * 100) / 100` to simulate `round(value, -2)`;

  - `Math.round(value / 100) * 100` to simulate `round(value, 2)`;

* Due to the underlying floating point number representation, using the simulated
  examples above with certain values does not return the correct value.

  - E.g., `Math.round(1.005 * 100) / 100` returns `1` instead of `1.01`.

* Will not ever return `-0`.

  - E.g., `Math.round(-0)` returns `-0` instead of `0`.

  - E.g., `Math.round(-Number.MIN_VALUE)` returns `-0` instead of `0`.

## Example Usage

```js
import { round } from 'qc-round';

round(20.49);           // 20
round(20.5);            // 21
round(-20.5);           // -20
round(-20.51);          // -21
round(1234.5678, -5);   // 1234.5678
round(1234.5678, -4);   // 1234.5678
round(1234.5678, -3);   // 1234.568
round(1234.5678, -2);   // 1234.57
round(1234.5678, -1);   // 1234.6
round(1234.5678, 0);    // 1235
round(1234.5678);       // 1235
round(1234.5678, 1);    // 1230
round(1234.5678, 2);    // 1200
round(1234.5678, 3);    // 1000
round(1234.5678, 4);    // 0
```


[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-round/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-round?branch=master
[downloads-image]: http://img.shields.io/npm/dm/qc-round.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-round
[license-image]: http://img.shields.io/npm/l/qc-round.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-round
[npm-badge-png]: https://nodei.co/npm/qc-round.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-round.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-round
