# qc-round

[![Build Status][travis-svg]][travis-url]
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

* `Math.round` doesn't allow rounding to be done at different decimal positions.  It has to be simulated.
  - `Math.round(value * 100) / 100` to simulate `round(value, -2)`;
  - `Math.round(value / 100) * 100` to simulate `round(value, 2)`;
* Due to the underlying floating point number representation, using the simulated examples above with certain values
  does not return the correct value.
  - E.g., `Math.round(1.005 * 100) / 100` returns `1` instead of `1.01`.


[downloads-image]: http://img.shields.io/npm/dm/qc-round.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-round
[license-image]: http://img.shields.io/npm/l/qc-round.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-round
[npm-badge-png]: https://nodei.co/npm/qc-to_bool.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-round.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-round
