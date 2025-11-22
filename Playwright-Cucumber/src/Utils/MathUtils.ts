/**
 * MathUtils
 *
 * A tiny utility module that provides basic arithmetic operations.
 * These helpers are deliberately simple and typed for easy reuse in tests
 * or small scripts within this repository.
 */

/**
 * Adds two numbers and returns the sum.
 *
 * @param a - first addend
 * @param b - second addend
 * @returns the numeric sum of `a` and `b`
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts the second number from the first and returns the difference.
 *
 * @param a - minuend
 * @param b - subtrahend
 * @returns the numeric difference `a - b`
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

export default {
  add,
  subtract,
};
