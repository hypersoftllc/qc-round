
import { round } from './index';

describe('qc-round', () => {

  describe('`round`', () => {

    it('should be a function', () => {
      expect(typeof round).toBe('function');
    });

    it('called with various values should return expected value', () => {
      expect(round(-2.6)).toBe(-2.6);
      expect(round(-2.5)).toBe(-2.5);
      expect(round(-1.2)).toBe(-1.2);
      expect(round(1.2)).toBe(1.2);
      expect(round(2.5)).toBe(2.5);
      expect(round(2.6)).toBe(2.6);

      expect(round(0, 1)).toBe(0);
      expect(round(0, 0)).toBe(0);
      expect(round(0, -1)).toBe(0);

      // 1.005 is known to be a problematic number when it comes to rounding.
      expect(round(1.005, 2)).toBe(0);
      expect(round(1.005, 1)).toBe(0);
      expect(round(1.005, 0)).toBe(1);
      expect(round(1.005, -1)).toBe(1);
      expect(round(1.005, -2)).toBe(1.01);
      expect(round(1.005, -3)).toBe(1.005);
      expect(round(1.005)).toBe(1.005);

      expect(round(1234.5678, 5)).toBe(0);
      expect(round(1234.5678, 4)).toBe(0);
      expect(round(1234.5678, 3)).toBe(1000);
      expect(round(1234.5678, 2)).toBe(1200);
      expect(round(1234.5678, 1)).toBe(1230);
      expect(round(1234.5678, 0)).toBe(1235);
      expect(round(1234.5678, -1)).toBe(1234.6);
      expect(round(1234.5678, -2)).toBe(1234.57);
      expect(round(1234.5678, -3)).toBe(1234.568);
      expect(round(1234.5678, -4)).toBe(1234.5678);
      expect(round(1234.5678, -5)).toBe(1234.5678);
      expect(round(1234.5678)).toBe(1234.5678);

      // Use a value that contains an 'e' when toString is called on it. This ensures a branch in the code is covered.
      expect(round(1.23e81, 10)).toBe(1.23e81);
    });

    it('called with no arguments should return `undefined`', () => {
      expect(round()).toBeUndefined();
    });

    it('called with `undefined` should return `undefined`', () => {
      expect(round(undefined)).toBeUndefined();
    });

    it('called with a non-integral first argument should return the first argument', () => {
      let input;

      input = [];
      expect(round(input)).toBe(input);

      expect(round(true)).toBe(true);
      expect(round(false)).toBe(false);

      input = new Date();
      expect(round(input)).toBe(input);

      input = {};
      expect(round(input)).toBe(input);

      expect(round('')).toBe('');
    });

    it('called with a single number argument should return the first argument', () => {
      expect(round(Number.NEGATIVE_INFINITY)).toBe(Number.NEGATIVE_INFINITY);
      expect(round(-Number.MAX_VALUE)).toBe(-Number.MAX_VALUE);
      expect(round(-Number.MIN_VALUE)).toBe(-Number.MIN_VALUE);
      expect(round(0)).toBe(0);
      expect(round(0.0)).toBe(0);
      expect(round(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
      expect(round(1234.5678)).toBe(1234.5678);
      expect(round(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
      expect(round(Infinity)).toBe(Infinity);
      expect(round(Number.POSITIVE_INFINITY)).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with an `undefined` second argument should return the first argument', () => {
      expect(round(Number.NEGATIVE_INFINITY, undefined)).toBe(Number.NEGATIVE_INFINITY);
      expect(round(-Number.MAX_VALUE, undefined)).toBe(-Number.MAX_VALUE);
      expect(round(-Number.MIN_VALUE, undefined)).toBe(-Number.MIN_VALUE);
      expect(round(0, undefined)).toBe(0);
      expect(round(0.0, undefined)).toBe(0);
      expect(round(Number.MIN_VALUE, undefined)).toBe(Number.MIN_VALUE);
      expect(round(1234.5678, undefined)).toBe(1234.5678);
      expect(round(Number.MAX_VALUE, undefined)).toBe(Number.MAX_VALUE);
      expect(round(Infinity, undefined)).toBe(Infinity);
      expect(round(Number.POSITIVE_INFINITY, undefined)).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with a `null` second argument should return the first argument', () => {
      expect(round(Number.NEGATIVE_INFINITY, null)).toBe(Number.NEGATIVE_INFINITY);
      expect(round(-Number.MAX_VALUE, null)).toBe(-Number.MAX_VALUE);
      expect(round(-Number.MIN_VALUE, null)).toBe(-Number.MIN_VALUE);
      expect(round(0, null)).toBe(0);
      expect(round(0.0, null)).toBe(0);
      expect(round(Number.MIN_VALUE, null)).toBe(Number.MIN_VALUE);
      expect(round(1234.5678, null)).toBe(1234.5678);
      expect(round(Number.MAX_VALUE, null)).toBe(Number.MAX_VALUE);
      expect(round(Infinity, null)).toBe(Infinity);
      expect(round(Number.POSITIVE_INFINITY, null)).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with a non-integral second argument should return the first argument', () => {
      expect(round(Number.NEGATIVE_INFINITY, 1.2)).toBe(Number.NEGATIVE_INFINITY);
      expect(round(-Number.MAX_VALUE, 1.2)).toBe(-Number.MAX_VALUE);
      expect(round(-Number.MIN_VALUE, 1.2)).toBe(-Number.MIN_VALUE);
      expect(round(0, 1.2)).toBe(0);
      expect(round(0.0, 1.2)).toBe(0);
      expect(round(Number.MIN_VALUE, 1.2)).toBe(Number.MIN_VALUE);
      expect(round(1234.5678, 1.2)).toBe(1234.5678);
      expect(round(Number.MAX_VALUE, 1.2)).toBe(Number.MAX_VALUE);
      expect(round(Infinity, 1.2)).toBe(Infinity);
      expect(round(Number.POSITIVE_INFINITY, 1.2)).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NaN` and `-Infinity` should return `Number.NaN`', () => {
      expect(round(Number.NaN, -Infinity)).toEqual(Number.NaN);
    });

    it('called with `Number.NEGATIVE_INFINITY` and `-Infinity` should return `Number.NEGATIVE_INFINITY`', () => {
      expect(round(Number.NEGATIVE_INFINITY, -Infinity)).toBe(Number.NEGATIVE_INFINITY);
    });

    it('called with `Infinity` and `-Infinity` should return `Infinity`', () => {
      expect(round(Infinity, -Infinity)).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` and `-Infinity` should return `Number.POSITIVE_INFINITY`', () => {
      expect(round(Number.POSITIVE_INFINITY, -Infinity)).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NaN` and `-2` should return `Number.NaN`', () => {
      expect(round(Number.NaN, -2)).toEqual(Number.NaN);
    });

    it('called with `Number.NEGATIVE_INFINITY` and `-2` should return `Number.NEGATIVE_INFINITY`', () => {
      expect(round(Number.NEGATIVE_INFINITY, -2)).toBe(Number.NEGATIVE_INFINITY);
    });

    it('called with `Infinity` and `-2` should return `Infinity`', () => {
      expect(round(Infinity, -2)).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` and `-2` should return `Number.POSITIVE_INFINITY`', () => {
      expect(round(Number.POSITIVE_INFINITY, -2)).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NaN` and `0` should return `Number.NaN`', () => {
      expect(round(Number.NaN, 0)).toEqual(Number.NaN);
    });

    it('called with `Number.NEGATIVE_INFINITY` and `0` should return `Number.NEGATIVE_INFINITY`', () => {
      expect(round(Number.NEGATIVE_INFINITY, 0)).toBe(Number.NEGATIVE_INFINITY);
    });

    it('called with `Infinity` and `0` should return `Infinity`', () => {
      expect(round(Infinity, 0)).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` and `0` should return `Number.POSITIVE_INFINITY`', () => {
      expect(round(Number.POSITIVE_INFINITY, 0)).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NaN` and `2` should return `Number.NaN`', () => {
      expect(round(Number.NaN, 2)).toEqual(Number.NaN);
    });

    it('called with `Number.NEGATIVE_INFINITY` and `2` should return `Number.NEGATIVE_INFINITY`', () => {
      expect(round(Number.NEGATIVE_INFINITY, 2)).toBe(Number.NEGATIVE_INFINITY);
    });

    it('called with `Infinity` and `2` should return `Infinity`', () => {
      expect(round(Infinity, 2)).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` and `2` should return `Number.POSITIVE_INFINITY`', () => {
      expect(round(Number.POSITIVE_INFINITY, 2)).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NaN` and `Infinity` should return `Number.NaN`', () => {
      expect(round(Number.NaN, Infinity)).toEqual(Number.NaN);
    });

    it('called with `Number.NEGATIVE_INFINITY` and `Infinity` should return `Number.NEGATIVE_INFINITY`', () => {
      expect(round(Number.NEGATIVE_INFINITY, Infinity)).toBe(Number.NEGATIVE_INFINITY);
    });

    it('called with `Infinity` and `Infinity` should return `Infinity`', () => {
      expect(round(Infinity, Infinity)).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` and `Infinity` should return `Number.POSITIVE_INFINITY`', () => {
      expect(round(Number.POSITIVE_INFINITY, Infinity)).toBe(Number.POSITIVE_INFINITY);
    });

  });

});
