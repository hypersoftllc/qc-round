# qc-round

[![Build Status](https://travis-ci.org/hypersoftllc/qc-round.svg?branch=master)](https://travis-ci.org/hypersoftllc/qc-round)

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
