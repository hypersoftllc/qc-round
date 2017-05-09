
const CEIL: string = 'ceil';
const FLOOR: string = 'floor';
const ROUND: string = 'round';

// ==========================================================================
// The following is modified from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round.
/**
 * Decimal adjustment of a number.
 *
 * @private
 *
 * @param {string} type - The type of adjustment.  Must be one of `'ceil'`, `'floor'`,  or `'round'`.
 * @param {number} value - The number.
 * @param {number} exp - The exponent (the 10 logarithm of the adjustment base).
 *
 * @returns {number} The adjusted value.
 */
function _decimalAdjust(type: string, value: any, exp: number): any {
  let val: string, vals: string[];

  if (typeof value !== 'number' || value != value || value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
    return value;
  }
  value = +value;

  if (typeof exp !== 'number' || exp != exp || exp === Number.POSITIVE_INFINITY || exp === Number.NEGATIVE_INFINITY) {
    return value;
  }
  exp = +exp;
  if (exp === 0) {
    return (<any>Math)[type](value);
  }
  // If the exp is not an integer...
  if (exp % 1 !== 0) {
    return value;
  }

  // Shift
  val = value.toString();
  vals = val.split('e');
  value = (<any>Math)[type](+(`${vals[0]}e${(vals[1] ? +vals[1] - exp : -exp)}`));

  // Shift back
  val = value.toString();
  vals = val.split('e');
  return +(`${vals[0]}e${(vals[1] ? +vals[1] + exp : exp)}`);
}


// ==========================================================================
/**
 * Similar to `Math.round` but is capable of rounding to different decimal places.  `Math.round` will only round a
 * number to the nearest integer which is effectively rounding to zero decimal places.
 *
 *     round(20.49); // 20
 *     round(20.5); // 21
 *     round(-20.5); // -20
 *     round(-20.51); // -21
 *     Math.round(1.005 * 100)/100; // 1.  Due to inaccurate floating point arithmetic, this rounds incorrectly.
 *     round(1.005, -2) // 1.01.  But this doesn't.
 *     round(1234.5678, -5) // 1234.5678
 *     round(1234.5678, -4) // 1234.5678
 *     round(1234.5678, -3) // 1234.568
 *     round(1234.5678, -2) // 1234.57
 *     round(1234.5678, -1) // 1234.6
 *     round(1234.5678, 0) // 1235
 *     round(1234.5678) // 1235
 *     round(1234.5678, 1) // 1230
 *     round(1234.5678, 2) // 1200
 *     round(1234.5678, 3) // 1000
 *     round(1234.5678, 4) // 0
 *
 * @param {number} value - The number.
 * @param {number} [exp=0] - The exponent (the 10 logarithm of the adjustment base).  May be positive or negative.
 *
 * @returns {number} The rounded value.
 */
function round(value?: any, exp?: number): any {
  return _decimalAdjust(ROUND, value, exp);
}

// ==========================================================================
export { round };
