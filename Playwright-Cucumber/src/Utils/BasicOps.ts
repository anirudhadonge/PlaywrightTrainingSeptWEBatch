/**
 * BasicOps
 *
 * A second tiny utility module demonstrating the same basic operations.
 * This file exists to satisfy the request for two TypeScript files exposing
 * addition and subtraction methods.
 */

/**
 * Returns the sum of two numbers.
 *
 * @param x - first value
 * @param y - second value
 * @returns x + y
 */
export function addition(x: number, y: number): number {
  return x + y;
}

/**
 * Returns the difference between two numbers.
 *
 * @param x - first value (minuend)
 * @param y - second value (subtrahend)
 * @returns x - y
 */
export function subtraction(x: number, y: number): number {
  return x - y;
}

export default {
  addition,
  subtraction,
};
